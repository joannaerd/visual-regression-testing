describe('Button stories', () => {
    it('Basic looks correct', async () => {
        await page.goto('http://localhost:9010/iframe.html?id=button--basic');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    });
});
