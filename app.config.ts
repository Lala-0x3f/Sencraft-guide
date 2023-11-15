export default defineAppConfig({
  docus: {
    title: 'Sencraft 教程',
    description: 'Sencraft 是一个公益的 minecraft 创造服务器。',
    image: '/cover.png',
    socials: {
      github: 'https://github.com/Lala-0x3f/sencraft-guide',
      ['qq']: {
        label: 'QQ',
        icon: 'simple-icons:tencentqq',
        href: 'https://pd.qq.com/s/ao0mk068w'
      },
      ['sencraft 公告板']: {
        label: 'sencraft 公告板',
        icon: 'pepicons-pop:bulletin-notice',
        href: 'https://bbs.sencraft.top/'
      }

    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'sencraft-guide',
      owner: 'Lala-0x3f',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },

  }
})
