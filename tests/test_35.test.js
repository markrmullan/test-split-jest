test('sleep for 777 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 777));
});