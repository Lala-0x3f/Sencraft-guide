export default defineAppConfig({
  docus: {
    title: 'SenCraft 教程',
    description: 'SenCraft 是一个公益的 minecraft 创造服务器。',
    image: '/cover.png',
    socials: {
      github: 'https://github.com/Lala-0x3f/SenCraft-guide',
      ['qq']: {
        label: 'QQ',
        icon: 'simple-icons:tencentqq',
        href: 'https://pd.qq.com/s/ao0mk068w'
      },
      ['SenCraft 公告板']: {
        label: 'SenCraft 公告板',
        icon: 'pepicons-pop:bulletin-notice',
        href: 'https://bbs.SenCraft.top/'
      }

    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'SenCraft-guide',
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
