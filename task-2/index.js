
const assets = [
  {
    asset_id: 18883,
    asset_title: "Technical Project Management",
    asset_description: "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n",
    asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
    asset_type: "display_asset",
    asset_content_type: "video"
  },
  {
    asset_id: 18884,
    asset_title: "Threadbuild",
    asset_description: "Watch the video and thread build, and jot out key threads while watching that video.",
    asset_content: "",
    asset_type: "input_asset",
    asset_content_type: "threadbuilder"
  },
  {
    asset_id: 18885,
    asset_title: "Structure you pointers",
    asset_description: "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
    asset_content: "",
    asset_type: "input_asset",
    asset_content_type: "article"
  },
  {
    asset_id: 18886,
    asset_title: "4SA Method",
    asset_description: "To explore more read more",
    asset_content: "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
    asset_type: "display_asset",
    asset_content_type: "article"
  }
];


function renderCards() {
  const container = document.getElementById('card-container'); 

  assets.forEach(asset => {

    const card = document.createElement('div');
    card.classList.add('card', 'a');

    card.innerHTML = `
      <div class="card__header">
        <div class="header__container">
          <p class="card__title">${asset.asset_title}</p>
          <div class="i-con">i</div>
        </div>
      </div>
      <div class="card__body">
        <div class="body__description">
          <b class="bold">Description:</b>
          <p class="body__para__a">${asset.asset_description}</p>
        </div>
        <div class="body__video">
          ${asset.asset_content_type === 'video' ? `<iframe src="${asset.asset_content}" class="video" frameborder="0" allowfullscreen></iframe>` : ''}
        </div>
      </div>
    `;


    container.appendChild(card);
  });
}

renderCards();

