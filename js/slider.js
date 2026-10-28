// 首页轮播：点击切换技能标签
document.addEventListener('DOMContentLoaded', () => {
  const tags = document.querySelectorAll('.tag');
  tags.forEach((tag) => {
    tag.addEventListener('click', () => tag.classList.toggle('active'));
  });
});