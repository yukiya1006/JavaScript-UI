(() => {

  class Accodion {
    //初期化
    constructor(obj){

      
      const $doc = document;
      const $elm = $doc.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);
    
      const triggerLen = $trigger.length;
      let index = 0;
      while(index < triggerLen) {
        //０個目のtriggerに対してクリックイベントを付与
        $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
        index++;
      }
    }
    //クリックで実行される処理
    clickHandler(e){
    e.preventDefault();
    
      //currentTargetでクリックした要素を取得
      //nextElementSiblingで取得した要素の次のcontentが入る
      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;
    
      if($content.style.display === 'block'){
        $content.style.display = 'none';
      } else {
        $content.style.display = 'block';
      }
    }
  }

  const muscleAccodion = new Accodion({
    hookName: '#js-faq',
    tagName: 'p'
  });

  const dammyAccodion = new Accodion({
    hookName: '#js-accordion',
    tagName: 'a'
  });

  const miniAccodion = new Accodion({
    hookName: '#js-accordion-mini',
    tagName: 'dt'
  });

})();
