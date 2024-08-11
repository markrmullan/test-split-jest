test('sleep for 873 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 873));
});