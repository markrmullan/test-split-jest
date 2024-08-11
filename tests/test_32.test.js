test('sleep for 558 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 558));
});