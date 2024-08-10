test('sleep for 894 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 894));
});