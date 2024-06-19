var songBlocks = document.querySelectorAll('.playlist-card');
songBlocks.forEach(function (block, index) {
  block.addEventListener('click', function () {
    switch (index) {
      case 0:
        alert('法拉利车队（Ferrari）');
        break;
      case 1:
        alert('迈凯伦F1车队（McLaren F1 Team）');
        break;
      case 2:
        alert('威廉姆斯车队（WILLIAMS Racing）');
        break;
	case 3:
        alert('梅赛德斯AMG马石油F1车队（Mercedes-AMG Petronas F1 Team）');
        break;
			case 4:
        alert('阿尔派车队（Alpine F1 Team）');
        break;
			case 5:
        alert('红牛车队（Oracle Red Bull Racing）');
        break;
			case 6:
        alert('哈斯车队（Haas F1 Team，又称Haas Racing Developments）');
        break;
			case 7:
        alert('Visa Cash App RB F1车队（简称红牛二队，亦称小红牛车队、红牛青年队，曾用名意大利语Scuderia Toro Rosso，缩写为STR，以及Scuderia AlphaTauri，缩写为AT。现名为Visa Cash App RB Formula One Team，缩写为VCARB）');
        break;
			case 8:
        alert('阿斯顿·马丁沙特阿美F1车队（Aston Martin Aramco F1 Team）');
        break;
      default:
        alert('Kick 索伯车队（Kick Sauber），曾用名：阿尔法罗密欧车队、索伯车队，全称：“Stake F1 车队 Kick 索伯”（Stake F1 Team Kick Sauber）');
        break;
    }
  });
});