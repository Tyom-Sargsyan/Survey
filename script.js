const texts = [
  "Մերսի քեզ, մեր ծանոթության առաջին օրվանից իմ կյանքը ավելի սիրուն, պուպուշ, հիասքանչ, կախարդական դարձնելու համար",
  "Երևի իրոք նշան էր, որ հենց դու ուղարկեցիր Led Zeppelin ի երգի վիդեոն",
  "Եթե դուք հասել եք այս սրտիկին, ուրեմն հերիքա սպասեք հրաշքի, այն արդեն տեղի է ունեցել, զանգեք Ծյոմին",
  `Չեմ ուզում ինձ դնեմ իմ երազած տղու տեղը, բայց պիտի ասեմ. "I feel different when I'm with you"`,
  "Պատրաստ եմ անվերջ լսել, թե ոնց ես 1 վայրկյան ժամանակահատվածում հարյուրավոր մտքեր արտահայտում",
  "Once Ստառուշկա <br> Always Ստառուշկա",
  "J'ai fait ce site, pour exprimer mes sentiments, que j'ai pour vous.  Il y a tant à dire, mais ici je n'ai séparé que les choses les plus importantes.",
  "Язык может скрывать истину, а глаза – никогда!",
  "Want to give you the same butterflies, as you gave to me",
  '<img src="frame.png" width="200" height="300" alt="" />',
];
let arr = [
  `Պատրաստ եք՞`,
  `Քանի տարեկան եք՞`,
  `Բանակում Ծառայել եք՞`,
  `Աշխատում եք՞`,
  `Ամուսնացած եք՞`,
  `Կուզեք ընկեր ունենալ՞`,
  `Գիտեիք՞ որ Կիթառ նվագող զույգերը ավելի երջանիկ են միմյանց հետ`,
  `Գիտեիք՞ որ դուք շատ գեղեցիկ եք`,
  `Եթե Ծյոմը ձեզ հրավիրեր դեյթի ինչ՞ կպատասխանեիք`,
];

texts.forEach((text) => {
  let div = document.createElement("div");
  div.classList.add("snowflake");
  let p = document.createElement("p");
  p.innerHTML = text;
  div.innerHTML += `<img src="hearts/heart${Math.round(
    Math.random() * 5 + 1
  )}.svg" alt="heart"/>`;
  div.append(p);

  document.querySelector(".snowflakes").prepend(div);
});

let i = 0;
let a = document.getElementById(`question`);
let yesButton = document
  .querySelectorAll(`button`)
  .forEach((el) => el.addEventListener(`click`, initQuestion));

const getPercent = () => {
  switch (Math.round(Math.random() * 2)) {
    case 0:
      return "130%";
    case 1:
      return "-130%";
    default:
      return "0px";
  }
};

function initQuestion() {
  4;
  if (i === arr.length - 1) {
    document.querySelector("#no").style.transition = "0s";
    document.querySelector("#no").style.pointerEvents = "none";
    document.getElementById(`noParent`).onmouseover = () => {
      let topPos = getPercent();
      let leftPos = getPercent();
      if ((topPos === leftPos) === "0px") {
        leftPos = !Math.round(Math.random()) ? "-130%" : "130%";
      }
      document.querySelector("#no").style.top = topPos;
      document.querySelector("#no").style.left = leftPos;
    };

    document.getElementById(`noParent`).onmouseout = () => {
      document.querySelector("#no").style.top = "0px";
      document.querySelector("#no").style.left = "0px";
    };
  }
  if (i === arr.length) {
    document.querySelector(".section").style.display = "none";
    document.getElementById("background").style.filter = "none";
    // document.querySelector("#music").play();
    let fil = document.querySelectorAll(`.snowflake`);
    let initialHeart = document.querySelector(`.snowflake1 > img`);
    let videoFilter = document.querySelector(`.myVideo`);
    initialHeart.classList.add(`initial`)
    videoFilter.style.filter = `blur(4rem)`;
    fil.forEach((el) => {
      el.style.filter = `blur(4rem)`;
    });
    initialHeart.addEventListener(`click`, closeIt);
    function closeIt() {
      let flex = document.querySelector(`.flex`);
      flex.style.display = `none`;
      videoFilter.style.filter = `none`;
      fil.forEach((el) => {
        el.style.filter = `none`;
      });
    }
  } else {
    a.innerHTML = arr[i];
    i++;
  }
}
initQuestion();

//--------------------------------------------------------------------------
let hearts = document.querySelectorAll(`.snowflake`);
let text = document.querySelectorAll(`p`);

hearts.forEach((snowFlake) => {
  snowFlake.addEventListener(`click`, () => {
    if (!snowFlake.classList.contains("dontMove")) {
      snowFlake.setAttribute("leftPos", snowFlake.offsetLeft);
    }
    snowFlake.classList.toggle("dontMove");
  });
});

const jsAnimation = (snowFlake, dirTog) => {
  if (snowFlake.classList.contains("dontMove")) {
    return;
  } 
  const hor = dirTog ? 200 : -200;
  let initialLeftPos = snowFlake.offsetLeft;
  if (snowFlake.getAttribute("leftPos")) {
    initialLeftPos = snowFlake.getAttribute("leftPos");
    snowFlake.removeAttribute("leftPos");
  }
  snowFlake.style.left = +initialLeftPos + hor + "px";

  if (snowFlake.offsetTop >= window.innerHeight) {
    snowFlake.style.transitionDuration = "0s";
    snowFlake.style.top = 0 + "px";
    setTimeout(() => {
      snowFlake.style.transitionDuration = "1.8s";
      snowFlake.style.top = snowFlake.offsetTop + 250 + "px";
    }, 0);
  } else {
    snowFlake.style.transitionDuration = "1.8s";
    snowFlake.style.top = snowFlake.offsetTop + 250 + "px";
  }
};

const animateTheSelection = ({ delayTime = 0, selector }) => {
  let dirTog = false;
  console.log("💜 worked");
  setTimeout(() => {
    setInterval(() => {
      dirTog = !dirTog;
      document
        .querySelectorAll(selector)
        .forEach((e) => jsAnimation(e, dirTog));
    }, 1000);
  }, delayTime);
};

for (let i = 1; i <= 10; i++) {
  animateTheSelection({
    delayTime: Math.round(Math.random() * 5000),
    selector: `.snowflake:nth-child(${i})`,
  });
}
