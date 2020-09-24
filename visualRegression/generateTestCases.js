const glob = require('glob');
const fs = require('fs');
const kebabCase = require('lodash/kebabCase');

const generateTestCase = ({ name, as, stories }) => {
  const fileContent = `describe('${as || name} stories', () => {
${stories
  .map(
    story => `  it('${story} looks correct', async () => {
    await page.goto('http://localhost:9010/iframe.html?id=${kebabCase(as || name)}--${kebabCase(story)}');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
`
  )
  .join('')}});
`;
  fs.writeFile(__dirname + `/__cases__/${name}.test.js`, fileContent, function (err) {
    if (err) {
      return console.error(err);
    }
  });
};

const generateTestCases = () => {
  console.info('Generating visual regression test cases...');
  const filesList = glob.sync('**/*.visualTest.js');
  console.log(filesList);

  filesList.forEach(filePath => {
    const { name, as, stories } = require(`../${filePath}`);
    if (name && stories) {
      generateTestCase({ name, as, stories });
    }
  });
};

generateTestCases();
