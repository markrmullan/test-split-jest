test('sleep for 543 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 543));
});