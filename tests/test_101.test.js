test('sleep for 852 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 852));
});