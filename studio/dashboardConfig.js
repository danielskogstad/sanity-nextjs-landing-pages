export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f967d3a2b0149f4bb568a41',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fzj4ntnz',
                  apiId: '14ace0fa-fd71-4fe9-9742-4a8b2b759ce4'
                },
                {
                  buildHookId: '5f967d3ab259c87d0f057d29',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5nscvo8s',
                  apiId: '8b419969-4bad-4477-b5b5-680b4fab57b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielskogstad/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5nscvo8s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
