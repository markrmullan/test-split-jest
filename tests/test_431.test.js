test('sleep for 578 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 578));
});