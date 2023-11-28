const { promises: fs } = require('fs');

const dateToday = new Date();

const msInOneDay = 1000 * 60 * 60 * 24;

function getMyBirthday()
{
    const today = new Date();
    const birthday = new Date("2005-10-02T00:00:00.000Z");

    const diffBirthdayToToday = today - birthday;

    const age = new Date(diffBirthdayToToday).getFullYear() - 1970;

    if(today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth())
    {
        return `${age} years old... But I will be <strong>Today 🎉</strong>`;
    }else if(today.getDate() === birthday.getDate() -1 && today.getMonth() === birthday.getMonth()){
        return `${age} years old... But I will be <strong>Tomorrow 🎓</strong>`;
    }

    const birthdatetoday = new Date(birthday.setFullYear(today.getFullYear()));
    const isBirthdayRaised = today - birthdatetoday > 0;

    const nextBirthdayYear = birthday.getFullYear() + (isBirthdayRaised ? 1 : 0);
    const nextBirthdayDate = new Date(birthday.getTime());
    nextBirthdayDate.setFullYear(nextBirthdayYear);

    const timeUntilBirthday = nextBirthdayDate - today;
    const dayUntilBirthday = Math.round(timeUntilBirthday / msInOneDay);

    return `${age} years old... But I will be <strong>${age + 1
    }</strong> in <strong>${dayUntilBirthday} days 🎉</strong>`;
}

function generateReadme()
{
    const readmeContent = `
<h1 align="center">
 Hi there :wave:
</h1>

[![GitHub WidgetBox](https://github-widgetbox.vercel.app/api/profile?username=AzaleeX&data=followers,repositories,stars,commits&theme=darkmode)]()

<h3 align="center">
  Alias: <strong>Azalee</strong></h3>
<h3 align="center">
  ${getMyBirthday()}
<h3/>
<h3 align="center">
  Description: is a dedicated development student who is committed to achieving continuous improvement.</h3>

 > Passionate about programming and development, he actively contributes on GitHub by sharing useful projects to enhance his skills day by day.
<p align="center">
 <img alt="github-snake" src="asset/AzaleeSnake.svg" />
</p>

<p align="center">
  <a href="https://twitter.com/AzaleeMcpe">
    <img src="https://skillicons.dev/icons?i=twitter" alt="" />
  </a>
  <a href="https://discord.com/users/846395226640613396">
    <img src="https://skillicons.dev/icons?i=discord" alt="" />
  </a>
  <a href="https://www.youtube.com/channel/UC7DjT1Wzgchw8c49pdeIKDg">
    <img src="https://www.shareicon.net/data/48x48/2015/09/30/109355_media_512x512.png" alt="YouTube" />
  </a>
  <a href="#">
    <img src="https://skillicons.dev/icons?i=github" alt="" />
  </a>
</p>

---
| What i listen to  | I use these languages  | Others  |
| -- | -- | -- |
| [![spotify-github-profile](https://spotify-github-profile.vercel.app/api/view?uid=58odnj281sok9ucrrf65pqats&cover_image=false&theme=default&show_offline=true&background_color=000000&interchange=false&bar_color=53b14f&bar_color_cover=true)](https://github.com/kittinan/spotify-github-profile) | [![My Skills](https://skillicons.dev/icons?i=php,ts,js,java,html,css&perline=3)](https://skillicons.dev) | [![My Skills](https://skillicons.dev/icons?i=git,github,docker,mysql,linux,bots,idea,jenkins&perline=3)](https://skillicons.dev) |

<p align="center">
<a href="#">
<img src="">
</a>
[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=AzaleeX&theme=dark&hide_border=true&type=svg)](#)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=AzaleeX&layout=compact&hide_border=true&theme=dark)](#)
[![AzaleeX's GitHub stats](https://github-readme-stats.vercel.app/api?username=AzaleeX&show_icons=true&theme=dark)](#)
</p>

---
📅 Last update of my README was **${dateToday.getDate()}/${dateToday.getMonth() + 1}/${dateToday.getFullYear()}**
at **${dateToday.getHours()}:${dateToday.getMinutes()}:${dateToday.getSeconds()}**
`;
    fs.writeFile('./README.md', readmeContent, 'utf8');
}
function main() {
    generateReadme();
}
main();

