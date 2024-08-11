test('sleep for 553 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 553));
});