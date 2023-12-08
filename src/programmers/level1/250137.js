function solution(bandage, health, attacks) {
  const [coolTime, perRecovery, skillRecovery] = bandage;
  const attacksMap = new Map(attacks);

  let turn = 0;
  let changeSec = 0;
  let curHealth = health;

  for (let i = 0; i < attacks.length; i += 1) {
    while (!attacksMap.has(turn)) {
      curHealth = Math.min(health, curHealth + perRecovery);
      changeSec += 1;

      if (changeSec === coolTime) {
        curHealth = Math.min(health, curHealth + skillRecovery);
        changeSec = 0;
      }

      turn += 1;
    }
    const attackDamage = attacksMap.get(turn);
    curHealth -= attackDamage;

    if (curHealth <= 0) return -1;
    changeSec = 0;
    turn += 1;
  }

  return Math.max(-1, curHealth);
}
