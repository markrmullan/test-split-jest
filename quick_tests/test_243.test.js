test('sleep for 757 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 757));
});