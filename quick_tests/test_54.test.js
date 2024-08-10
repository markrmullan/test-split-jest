test('sleep for 676 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 676));
});