export default defineAppConfig({
  docus: {
    title: 'SenCraft 指南',
    description: 'SenCraft 是一个公益的我的世界建筑服务器。森服指南宗旨为方便建筑师查询森各种工具，指令和解决疑难杂症',
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
      dir: '/content',
      branch: 'master',
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
