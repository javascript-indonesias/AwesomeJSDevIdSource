export class DeveloperItem {
  stringNama = '';
  stringSkill = '';
  stringGithubAlias = '';
  stringGithubUrl = '';
  stringFacebookAlias = '';
  stringFacebookUrl = '';
  stringTwitterAlias = '';
  stringTwitterUrl = '';
  stringLinkedinAlias = '';
  stringLinkedInUrl = '';
  stringBlogAlias = '';
  stringBlogUrl = '';
  stringMediumAlias = '';
  stringMediumUrl = '';

  constructor(data: any = {}) {
    this.stringNama = data.nama;
    this.stringSkill = data.skill;
    this.stringGithubAlias = data.github_alias;
    this.stringGithubUrl = data.github_url;
    this.stringFacebookAlias = data.facebook_alias;
    this.stringFacebookUrl = data.facebook_url;
    this.stringTwitterAlias = data.twitter_alias;
    this.stringTwitterUrl = data.twitter_url;
    this.stringLinkedinAlias = data.linkedin_alias;
    this.stringLinkedInUrl = data.linkedin_url;
    this.stringBlogAlias = data.blog_alias;
    this.stringBlogUrl = data.blog_url;
    this.stringMediumAlias = data.medium_alias;
    this.stringMediumUrl = data.medium_url;
  }
}
