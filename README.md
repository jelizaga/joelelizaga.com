# joelelizaga.com

The source of my personal web site, pre-`jekyll` compilation. Nothing too interesting.

## Dependencies

Requires ruby 2.5+, `bundler`, `jekyll` (https://jekyllrb.com/). To produce the full site, 
requires the videos from the gitignored `vid` directory. Does not include said videos.

To install dependencies on Ubuntu 18.04 (or any other Debian-based machine):

```
sudo apt install ruby ruby-dev build-essential
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler
```

I'm assuming you have `gcc` and `make`. ( ͡° ͜ʖ ͡°)

## Initialization

Enter directory.

`bundle exec jekyll serve`

You might have to run `bundle install` on your first run. Visit site on `127.0.0.1:4000`.