import type { DomNodeType } from '@/types/Panel/DOM/dom.types'

export const mockDomTree: DomNodeType[] = [
  {
    id: '1',
    tag: 'html',
    children: [
      {
        id: '2',
        tag: 'head',
        children: [
          { id: '3', tag: 'title', children: [{ id: '4', tag: 'text: Example Page' }] },
          { id: '5', tag: 'meta', attributes: { charset: 'UTF-8' } },
          {
            id: '6',
            tag: 'meta',
            attributes: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          },
          {
            id: '7',
            tag: 'meta',
            attributes: { name: 'description', content: 'This is a sample page for testing.' },
          },
          { id: '8', tag: 'link', attributes: { rel: 'stylesheet', href: 'styles.css' } },
        ],
      },
      {
        id: '9',
        tag: 'body',
        children: [
          {
            id: '10',
            tag: 'header',
            children: [
              {
                id: '11',
                tag: 'h1',
                children: [{ id: '12', tag: 'text: Welcome to Example Page' }],
              },
              {
                id: '13',
                tag: 'nav',
                children: [
                  {
                    id: '14',
                    tag: 'ul',
                    children: [
                      {
                        id: '15',
                        tag: 'li',
                        children: [
                          {
                            id: '16',
                            tag: 'a',
                            attributes: { href: '/' },
                            children: [{ id: '17', tag: 'text: Home' }],
                          },
                        ],
                      },
                      {
                        id: '18',
                        tag: 'li',
                        children: [
                          {
                            id: '19',
                            tag: 'a',
                            attributes: { href: '/about' },
                            children: [{ id: '20', tag: 'text: About' }],
                          },
                        ],
                      },
                      {
                        id: '21',
                        tag: 'li',
                        children: [
                          {
                            id: '22',
                            tag: 'a',
                            attributes: { href: '/contact' },
                            children: [{ id: '23', tag: 'text: Contact' }],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: '24',
            tag: 'main',
            children: [
              {
                id: '25',
                tag: 'section',
                children: [
                  { id: '26', tag: 'h2', children: [{ id: '27', tag: 'text: About Us' }] },
                  {
                    id: '28',
                    tag: 'p',
                    children: [
                      {
                        id: '29',
                        tag: 'text: We are a company providing sample content for testing.',
                      },
                    ],
                  },
                ],
              },
              {
                id: '30',
                tag: 'section',
                children: [
                  { id: '31', tag: 'h2', children: [{ id: '32', tag: 'text: Features' }] },
                  {
                    id: '33',
                    tag: 'ul',
                    children: [
                      {
                        id: '34',
                        tag: 'li',
                        children: [{ id: '35', tag: 'text: Fast and reliable' }],
                      },
                      { id: '36', tag: 'li', children: [{ id: '37', tag: 'text: Modern design' }] },
                      {
                        id: '38',
                        tag: 'li',
                        children: [{ id: '39', tag: 'text: Scalable solution' }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: '40',
            tag: 'footer',
            children: [
              { id: '41', tag: 'p', children: [{ id: '42', tag: 'text: © 2025 Example Inc.' }] },
              {
                id: '43',
                tag: 'a',
                attributes: { href: 'https://twitter.com/example' },
                children: [{ id: '44', tag: 'text: Twitter' }],
              },
            ],
          },
        ],
      },
    ],
  },
]
