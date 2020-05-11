/* eslint linebreak-style: ["error", "windows"] */
// links from direc/file.md
const links = [
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://atom.io/',
    text: 'Atom',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://code.visualstudio.com/',
    text: 'Code',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://github.com/Laboratoria/bootcamp/tree/master/topics/shell',
    text: 'UNIX Shell',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://github.com/Laboratoria/bootcamp/e/master/topics/scm/01-git',
    text: 'git',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://git-scm.com/download/win',
    text: 'Git bash',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://help.github.com/articles/fork-a-repo/src',
    text: 'fork',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://help.github.com/articles/cloning-a-repository/',
    text: 'Clona',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://docs.npmjs.com/',
    text: 'npm',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://docs.npmjs.com/',
    text: 'npm',
  },
];

const linksValidated = [
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://atom.io/',
    text: 'Atom',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://code.visualstudio.com/',
    text: 'Code',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://github.com/Laboratoria/bootcamp/tree/master/topics/shell',
    text: 'UNIX Shell',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://github.com/Laboratoria/bootcamp/e/master/topics/scm/01-git',
    text: 'git',
    status: 404,
    statusText: 'Fail',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://git-scm.com/download/win',
    text: 'Git bash',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://help.github.com/articles/fork-a-repo/src',
    text: 'fork',
    status: 404,
    statusText: 'Fail',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://help.github.com/articles/cloning-a-repository/',
    text: 'Clona',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://docs.npmjs.com/',
    text: 'npm',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md',
    href: 'https://docs.npmjs.com/',
    text: 'npm',
    status: 200,
    statusText: 'Ok',
  },
];

/* const links = [
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://atom.io/',
    text: 'Atom',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://code.visualstudio.com/',
    text: 'Code',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://github.com/Laboratoria/bootcamp/tree/master/topics/shell',
    text: 'UNIX Shell',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://github.com/Laboratoria/bootcamp/e/master/topics/scm/01-git',
    text: 'git',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://git-scm.com/download/win',
    text: 'Git bash',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://help.github.com/articles/fork-a-repo/src',
    text: 'fork',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://help.github.com/articles/cloning-a-repository/',
    text: 'Clona',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://docs.npmjs.com/',
    text: 'npm',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://docs.npmjs.com/',
    text: 'npm',
  },
];

const linksValidated = [
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://atom.io/',
    text: 'Atom',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://code.visualstudio.com/',
    text: 'Code',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://github.com/Laboratoria/bootcamp/tree/master/topics/shell',
    text: 'UNIX Shell',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://github.com/Laboratoria/bootcamp/e/master/topics/scm/01-git',
    text: 'git',
    status: 404,
    statusText: 'Fail',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://git-scm.com/download/win',
    text: 'Git bash',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://help.github.com/articles/fork-a-repo/src',
    text: 'fork',
    status: 404,
    statusText: 'Fail',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://help.github.com/articles/cloning-a-repository/',
    text: 'Clona',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://nodejs.org/',
    text: 'Node.js',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://docs.npmjs.com/',
    text: 'npm',
    status: 200,
    statusText: 'Ok',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://docs.npmjs.com/',
    text: 'npm',
    status: 200,
    statusText: 'Ok',
  },
]; */
module.exports = { links, linksValidated };
