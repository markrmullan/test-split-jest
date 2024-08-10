test('sleep for 839 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 839));
});