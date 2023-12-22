import readlineSync from 'readline-sync';

const choices = ['камень', 'ножницы', 'бумага'];
const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Ничья!';
  } if (userChoice === 'камень' && computerChoice === 'ножницы') {
    return 'Результат: Вы победили! Камень ломает ножницы.';
  } if (userChoice === 'ножницы' && computerChoice === 'бумага') {
    return 'Результат: Вы победили! Ножницы режут бумагу.';
  } if (userChoice === 'бумага' && computerChoice === 'камень') {
    return 'Результат: Вы победили! Бумага накрывает камень.';
  } if (computerChoice === 'камень' && userChoice === 'ножницы') {
    return 'Результат: Вы проиграли! Камень ломает ножницы.';
  } if (computerChoice === 'ножницы' && userChoice === 'бумага') {
    return 'Результат: Вы проиграли! Ножницы режут бумагу.';
  }
  return 'Результат: Вы проиграли! Бумага накрывает камень.';
};

console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!');
const playGame = () => {
  let userChoice = readlineSync.question('Выберите вашу фигуру:\n1. Камень\n2. Ножницы\n3. Бумага\nВаш выбор: ').toLowerCase();

  while (!choices.includes(userChoice)) {
    userChoice = readlineSync.question('Выберите вашу фигуру: ').toLowerCase();
    console.log('Некорректный выбор. Попробуйте еще раз.');
  }
  const computerChoice = getRandomChoice();
  console.log(`Компьютер выбирает: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));

  const playAgain = readlineSync.question('Хотите сыграть еще раз? (да/нет)').toLowerCase();
  if (playAgain === 'да') {
    return playGame();
  }
  return ('Спасибо за игру! До встречи!');
};

console.log(playGame());
export default { getRandomChoice, determineWinner, playGame };
