test('sleep for 647 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 647));
});