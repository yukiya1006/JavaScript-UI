(() =>{

  //DOM操作
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'active';
  
  //初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();
  
  //clickイベント
  const handleClick = (e) => {
    e.preventDefault();
    
    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav-content全て一旦リセット
    let index = 0;
    while(index < $nav.length){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  }; 
  
  //全てのnav要素に対して関数を適応・発火
  let index = 0;
  while(index < $nav.length){
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }

})();
