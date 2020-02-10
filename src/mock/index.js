import Mock from "mockjs";
let debug = 1;
if (debug) {
  Mock.mock(/login/, {
    data: {
      userId: "@integer(1,10)",
      "userName|1": ["田小布"],
      token: "@string(30)"
    },
    msg: "Success",
    status: "YQ-000"
  });
  Mock.mock(/getMenu/, {
    data: {
      menu: [
        {
          name: "项目管理",
          name_en: "Projects",
          router: "/",
          icon: "el-icon-time",
          children: [
            {
              name: "开发备忘",
              name_en: "Notes",
              router: "/notes",
              icon: "el-icon-date"
            },
            {
              name: "常用插件",
              name_en: "plugins",
              router: "/plugins",
              icon: "el-icon-document"
            },
            {
              name: "关于作者",
              name_en: "About",
              router: "/about",
              icon: "el-icon-document"
            }
          ]
        },
        {
          name: "天气预报",
          name_en: "Weather",
          router: "/weather",
          icon: "el-icon-picture-outline",
          children: []
        },
        {
          name: "魔幻立方",
          name_en: "Cube",
          router: "/cube",
          icon: "el-icon-menu",
          children: []
        },
        {
          name: "空白页面",
          name_en: "Blank",
          router: "/blank",
          icon: "el-icon-setting",
          children: []
        }
      ]
    },
    msg: "Success",
    status: "YQ-000"
  });
}
