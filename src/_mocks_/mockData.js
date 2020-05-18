
const linksValidated = [
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://atom.io/',
    status: 200,
    statusText: 'Ok',
    text: 'Atom',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://code.visualstudio.com/',
    status: 200,
    statusText: 'Ok',
    text: 'Code',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://github.com/Laboratoria/bootcamp/tree/master/topics/shell',
    status: 200,
    statusText: 'Ok',
    text: 'UNIX Shell',
  },
  {
    file: '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
    href: 'https://github.com/Laboratoria/bootcamp/e/master/topics/scm/01-git',
    status: 404,
    statusText: 'Fail',
    text: 'git',
  },
];

const links = [
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
];

const files = [
  '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/direc1/direc2/file2.md',
  '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/direc1/direc2/text.txt',
  '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/direc1/file1.md',
  '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md',
];
module.exports = { links, linksValidated, files };
