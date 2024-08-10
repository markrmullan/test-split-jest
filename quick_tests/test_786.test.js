test('sleep for 865 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 865));
});