test('sleep for 592 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 592));
});