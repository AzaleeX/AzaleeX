const { promises: fs } = require('fs');

const dateToday = new Date();

function getMyBirthday()
{
    const myBirthday = new Date(Date.UTC(2005, 10, 2, 0, 0, 0));
    const differenceInTime =  myBirthday.getTime() - dateToday.getTime();
    const daysUntilBirthday = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return daysUntilBirthday;
}

function generateReadme()
{
    const birthdaydate = getMyBirthday();

    const readmeContent = "### Hi there :wave:\n" +
        "\n" +
        "[![GitHub WidgetBox](https://github-widgetbox.vercel.app/api/profile?username=AzaleeX&data=followers,repositories,stars,commits&theme=darkmode)]()\n" +
        "\n" +
        "Alexandre Pramondon,\n" +
        " **Azalee**, aged 17, is a dedicated development student who strives for continuous improvement.\n" +
        "\n" +
        " 🎉 My birthday is on October 2 in **" + getMyBirthday() + "** days ?\n" +
        " > Passionate about programming and development, he actively contributes on GitHub by sharing useful projects to enhance his skills day by day.\n" +
        "<p align=\"center\">\n" +
        " <img alt=\"github-snake\" src=\"asset/AzaleeSnake.svg\" />\n" +
        "</p>\n" +
        "\n" +
        "<p align=\"center\">\n" +
        "  <a href=\"https://twitter.com/AzaleeMcpe\">\n" +
        "    <img src=\"https://skillicons.dev/icons?i=twitter\" alt=\"\" />\n" +
        "  </a>\n" +
        "  <a href=\"https://discord.com/users/846395226640613396\">\n" +
        "    <img src=\"https://skillicons.dev/icons?i=discord\" alt=\"\" />\n" +
        "  </a>\n" +
        "  <a href=\"https://www.youtube.com/channel/UC7DjT1Wzgchw8c49pdeIKDg\">\n" +
        "    <img src=\"https://www.shareicon.net/data/48x48/2015/09/30/109355_media_512x512.png\" alt=\"YouTube\" />\n" +
        "  </a>\n" +
        "  <a href=\"#\">\n" +
        "    <img src=\"https://skillicons.dev/icons?i=github\" alt=\"\" />\n" +
        "  </a>\n" +
        "</p>\n" +
        "\n" +
        "---\n" +
        "| What i listen to  | I use these languages  | Others  |\n" +
        "| -- | -- | -- |\n" +
        "| [![spotify-github-profile](https://spotify-github-profile.vercel.app/api/view?uid=58odnj281sok9ucrrf65pqats&cover_image=false&theme=default&show_offline=true&background_color=000000&interchange=false&bar_color=53b14f&bar_color_cover=true)](https://github.com/kittinan/spotify-github-profile) | [![My Skills](https://skillicons.dev/icons?i=php,ts,js,java,html,css&perline=3)](https://skillicons.dev) | [![My Skills](https://skillicons.dev/icons?i=git,github,docker,mysql,linux,bots,idea,jenkins&perline=3)](https://skillicons.dev) |\n" +
        "---\n" +
        "[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=AzaleeX&theme=dark&hide_border=true&type=png)](#)\n" +
        "[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=AzaleeX&layout=compact&hide_border=true&theme=dark)](#)\n" +
        "--- \n" +
        "📅 Last update of my README was **" + dateToday.getDate() + "/" + (dateToday.getMonth() + 1) + "/" + dateToday.getFullYear() + "**\n" + "at **" + dateToday.getHours() + ":" + dateToday.getMinutes() + ":" + dateToday.getSeconds() + "**\n" +
        "";
    fs.writeFile('./README.md', readmeContent, 'utf8');
}
function main() {
    generateReadme();
}
main();

