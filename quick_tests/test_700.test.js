test('sleep for 926 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 926));
});