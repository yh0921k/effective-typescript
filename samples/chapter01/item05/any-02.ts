function sample() {
  let age = 0;

  // age = '12';
  age = '12' as any;

  age += 1;
  console.log(age);
}

sample();
