import type { ProblemItem } from '@/types/Problems/problems.types'

export const mockProblems: ProblemItem[] = [
  {
    id: '1',
    title: 'Missing meta description',
    details: 'The page does not have a meta description tag.',
    severity: 'high',
    category: 'SEO',
    selector: 'head > meta[name="description"]',
    occurrences: 1,
    excerpt: '…LeetCode is the best platform to help you enhance your skills…', // пример
  },
  {
    id: '2',
    title: 'Large image without compression',
    details: 'Image size exceeds 2MB, which may slow down loading.',
    severity: 'medium',
    category: 'Performance',
    selector: 'img[src="hero.jpg"]',
    occurrences: 3,
    excerpt: '…background background background… hero.jpg (3840×2400)…',
  },
  {
    id: '3',
    title: 'Missing alt attribute',
    details: 'Some images are missing alt attributes.',
    severity: 'low',
    category: 'Accessibility',
    occurrences: 5,
    excerpt: '…<img src="/assets/banner.png">…',
  },
  // =====================
  // CONTENT
  // =====================
  {
    id: 'c1',
    title: 'High fluff (“water”) in hero text',
    details: 'Intro paragraph contains too much non-informative wording (>60%).',
    severity: 'medium',
    category: 'Content',
    occurrences: 1,
    excerpt: '“…the best way to empower your future by exploring limitless opportunities…”',
  },
  {
    id: 'c2',
    title: 'Keyword stuffing',
    details: 'Overuse of target phrase reduces readability and may hurt SEO.',
    severity: 'high',
    category: 'Content',
    occurrences: 1,
    excerpt: '“…interview questions, coding interview, interview practice, interview tasks…”',
  },
  {
    id: 'c3',
    title: 'Weak headline value proposition',
    details: 'Headline doesn’t clearly state value or outcome for the user.',
    severity: 'medium',
    category: 'Content',
    occurrences: 1,
    excerpt:
      '“A New Way to Learn” — vague; specify outcome (e.g., “Crack tech interviews faster”).',
  },

  // =====================
  // UX
  // =====================
  {
    id: 'u1',
    title: 'Primary CTA below the fold',
    details: 'Main call-to-action is not visible on first screen.',
    severity: 'high',
    category: 'UX',
    occurrences: 1,
    excerpt: '“Get Started” button appears only after scrolling past hero block.',
  },
  {
    id: 'u2',
    title: 'Low text contrast',
    details: 'Body text contrast is below WCAG AA on light background.',
    severity: 'medium',
    category: 'UX',
    occurrences: 4,
    excerpt: 'Light grey paragraph on white background in features section.',
  },
  {
    id: 'u3',
    title: 'Form is too long without progress',
    details: 'Multi-field form lacks steps/progress indicator, increasing drop-off.',
    severity: 'medium',
    category: 'UX',
    occurrences: 1,
    excerpt: 'Signup form asks for name, company, phone, role, country on a single step.',
  },

  // =====================
  // CRO
  // =====================
  {
    id: 'r1',
    title: 'Missing social proof near CTA',
    details: 'No testimonials/usage counters near conversion area.',
    severity: 'high',
    category: 'CRO',
    occurrences: 1,
    excerpt: 'CTA block lacks ratings, logos, case studies or quotes.',
  },
  {
    id: 'r2',
    title: 'Trust signals absent',
    details: 'No security/trust badges where user is asked to sign up or pay.',
    severity: 'medium',
    category: 'CRO',
    occurrences: 1,
    excerpt: 'Checkout/sign-up section has no SSL badge or partner logos.',
  },
  {
    id: 'r3',
    title: 'Vague CTA copy',
    details: 'CTA uses generic wording; action-oriented copy tends to convert better.',
    severity: 'low',
    category: 'CRO',
    occurrences: 1,
    excerpt: '“Explore” → consider “Start free trial” / “Practice 10 free tasks”.',
  },
]
