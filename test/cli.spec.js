const mdLinks = require('../lib/md-links.js');
const cli = require('../lib/cli.js');


// describe('mdLinks', () => {
//   it('Debe retornar un objeto', () => {
//     expect(typeof mdLinks.suma).toBe('function');
//   });
//   it('Debe retornar el doble de valor', (done) => {
//     function callback(data) {
//       try {
//         expect(mdLinks.suma(data)).toBe(6);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     }
//     mdLinks.suma(callback(3));
//   });
//   it('Debe retornar una resta', () => {
//     expect(mdLinks.rest(3, -4)).toBe(7);
//   });
// });

// /home/ghlena/desktop/laboratoria/Lim/ debe de retornenar verdadero
// /home/ghlena/deskt.p/laboratoria/Lim/ debe de retornenar falso
// /home/ghlena/ --validate --state debe devolver verdadero
// /home/ghlena/ --state --validate debe devolver verdadero
// /home/ghlena/ --state debe devolver verdadero
// /home/ghlena/ --validate debe devolver verdadero
// /home/ghlena/ --validate --validate debe devolver falso
// /home/ghlena/ --debe devolver falso
// /home/ghlena/ state debe devolver falso
// /home/ghlena/ --state --validate  command1 comand2 debe devolver falso




// test for CLI
describe('CLI', () => {
  it('cli debe ser un objeto', () => {
    expect(cli).toBe('object');
  });
  it('Debe retornar true si el numero de comandos va de 1 a 3', (done) => {
    function callback() {
      try {
        expect(cli.validNumOfCommands()).toBe(true);
        done();
      } catch (error) {
        done(error);
      }
    }
    cli.validNumOfCommands(callback);
  });
  it('validtePath should be a function', () => {
    expect(typeof cli.validatePath()).toBe('function');
  });
  it('return true when path is /home/ghlena/desktop/laboratoria/', () => {
    expect(cli.validatePath('/home/ghlena/desktop/laboratoria/')).toBeTruthy();
  });
  it('return false when path is /home/ghlena/desktop.algo/laboratoria/', () => {
    expect(cli.validatePath('/home/ghlena/desktop.algo/laboratoria/')).toBeFalsy();
  });
  it('validateOptions should be a function', () => {
    expect(cli.validateOptions()).toBe('function');
  });
  it('Return a numeber between 1 to 3 when options are --validate, --state or both', () => {
    const cases = [1, 2, 3];
    expect(cases).toEqual(expect.arrayContaininf(cli.validateOptions('--validate', '--state')));
    expect(cases).toEqual(expect.arrayContaininf(cli.validateOptions('--validate')));
    expect(cases).toEqual(expect.arrayContaininf(cli.validateOptions('--state')));
  });
  it('Return Zero when options are different to --validate, --state or both', () => {
    expect(cli.validateOptions('validate')).toBe(0);
    expect(cli.validateOptions('valid', 'stat')).toBe(0);
    expect(cli.validateOptions(323, '#')).toBe(0);
  });
});

// funcion comprobar path absoluto
describe('Comprobar si path es absoluto', () => {
  it('validtePath debe se una funcion', () => {
    expect(typeof cli.isAbsolutePath()).toBe('function');
  });
  it('validtePath debe retornar true para un path absoluto', () => {
    expect(cli.isAbsolutePath()).toBe(true);
  });
  it('isAbsolutePath debe retornar false con un path relativo', () => {
    expect(cli.isAbsolutePath()).toBe(false);
  });
});

// funcion convertir path
describe('Convertir  path relativa a absoluta', () => {
  it('convertPathToAbsolute debe ser una funcion', () => {
    expect(typeof cli.convertPathToAbsolute()).toBe('function');
  });
  it('validtePath debe se una funcion', () => {
    expect(cli.convertPathToAbsolute('pathRelative')).toBe('pathAbsolute');
  });
});


// indentificar si es archivo.md o un directorio
describe('comprobar si es un file.md', () => {
  it('isADirectoryPath should be a function', () => {
    expect(typeof cli.isADirectoryPath()).toBe('function');
  });
  it('isADirectoryPath should return true for a directory path', () => {
    expect(cli.isADirectoryPath()).toBe(true);
  });
  it('isADirectoryPath should return false for a file path', () => {
    expect(cli.isADirectoryPath()).toBe(false);
  });
  it('isAFileMd should be a function', () => {
    expect(cli.isAFileMd()).toBe('function');
  });
  it('isAFileMd should return true for file.md', () => {
    expect(cli.isAFileMd()).toBe(true);
  });
  it('isAFileMd should return false for file.txt', () => {
    expect(cli.isAFileMd()).toBe(false);
  });
});


// lee el archivo .md para extraer su contenido
describe('Read File MD retorna un array de objetos[{href, text, file}]', () => {
  it('readFileMd should return an function', () => {
    expect(typeof cli.readFileMd()).toBe('function');
  });
  it('readFileMd should return an array of objects ', () => {
    expect(cli.readFileMd()).toEqual('array');
  });
});


// test for mdLinks
describe('mdlikns', () => {
  it('mdlinks is an object', () => {
    expect(mdLinks).toBe('object');
  });
  it('recive a valid path and return an array of objects', (done) => {
    function callback(mypath, options) {
      try {
        expect(mdLinks.mdLinks(mypath, options)).toBe('object');
        done();
      } catch (error) {
        done(error);
      }
    }
    mdLinks.mdLinks(callback('homt/ghlena/Desktop/laboratoria', '--validate'));
  });
});
