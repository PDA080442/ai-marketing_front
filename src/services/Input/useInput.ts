import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { InputUrl, TokenUser } from '@/types/Input/input.types'
import { postUrl } from '@/composable/Input/input.request'

export function useInput() {
  const router = useRouter()

  const snackbar = ref(false)
  const snackbarColor = ref<'success' | 'error'>('success')
  const snackbarText = ref('')

  const input = reactive<InputUrl>({
    url: [''],
  })

  const isValidUrl = (url: string) =>
    (url.startsWith('http://') || url.startsWith('https://')) && !url.includes(' ')

  const submit = async () => {
    for (const url of input.url) {
      if (!isValidUrl(url)) {
        snackbarText.value = `${url} is not valid`
        snackbarColor.value = 'error'
        snackbar.value = true
        return
      }
    }

    try {
      const { token } = (await postUrl(input)) as TokenUser
      localStorage.setItem('tokenUser: ', token)
      await router.push({ name: 'Queue', query: { token } })
      snackbarText.value = 'You sent link(s) for analyze'
      snackbarColor.value = 'success'
      snackbar.value = true
    } catch (err) {
      console.error(err)
      snackbarText.value = 'An error has occurred.\nPlease check your links and try again.'
      snackbarColor.value = 'error'
      snackbar.value = true
    }
  }

  return {
    input,
    snackbar,
    snackbarColor,
    snackbarText,
    submit,
  }
}
