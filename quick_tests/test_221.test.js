test('sleep for 650 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 650));
});