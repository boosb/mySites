<?php get_header(); ?>
  
  <main class="main">
    <div class="container">
      <div class="main__title">
        <?php the_field('main__title') ?>
      </div>
      <div class="main__text">
        <?php the_field('main__text') ?>
      </div>
      <div class="main__img">
        <img src="<?php bloginfo( 'template_url' ); ?>/assets/images/main-img.png">
      </div>
      <div class="project">
        <div class="project__title">
          <?php the_field('project__title') ?>
        </div>

        <?php
        $featured_posts = get_field('project__item');

        if( $featured_posts ): ?>
          <ul>
          <?php foreach( $featured_posts as $post ): 

            setup_postdata($post); ?>
            <li>
            <div class="project__item">
              <div class="project__name">
                <?php the_field('project__name') ?>
              </div>
              <div class="project__size">
                <?php the_field('project__size') ?>
              </div>
              <div class="project__area">
                <?php the_field('project__area') ?>
              </div>
              <div class="project__price">
                <?php the_field('project__price') ?>
              </div>
              <div class="project__images">
                <div class="project__images-item-1">
                  <img src="<?php the_field('project__images-item-1') ?>" alt="">
                </div>
              </div>
              <div class="project__images">
                <div class="project__images-item-2">
                  <img src="<?php the_field('project__images-item-2') ?>" alt="">
                </div>
              </div>
            </div>
            </li>
          <?php endforeach; ?>
          </ul>
          <?php 
          wp_reset_postdata(); ?>
        <?php endif; ?>
      </div>
    </div>

    <div class="download">
      <img src="<?php bloginfo( 'template_url' ); ?>/assets/images/home-download.png" alt="">
      <div class="download__link">
        <a href="<?php the_field('download__link') ?>" download >СКАЧАТЬ ВЕСЬ КАТАЛОГ ДОМОВ</a>
      </div>
    </div>
    
    <div class="container">
      <div class="gallery">
        <div class="gallery__title">
          <?php the_field('gallery__title') ?>
        </div>
        <div class="gallery__text">
          <?php the_field('gallery__text') ?>
        </div>
        <div class="gallery__inner">
          <a href="<?php the_field('gallery__full-1') ?>"><img src="<?php the_field('gallery__item-1') ?>"></a>
          <a href="<?php the_field('gallery__full-2') ?>"><img src="<?php the_field('gallery__item-2') ?>"></a>
          <a href="<?php the_field('gallery__full-3') ?>"><img src="<?php the_field('gallery__item-3') ?>"></a>
          <a href="<?php the_field('gallery__full-4') ?>"><img src="<?php the_field('gallery__item-4') ?>"></a>
          <a href="<?php the_field('gallery__full-5') ?>"><img src="<?php the_field('gallery__item-5') ?>"></a>
          <a href="<?php the_field('gallery__full-6') ?>"><img src="<?php the_field('gallery__item-6') ?>"></a>
          <a href="<?php the_field('gallery__full-7') ?>"><img src="<?php the_field('gallery__item-7') ?>"></a>
          <a href="<?php the_field('gallery__full-8') ?>"><img src="<?php the_field('gallery__item-8') ?>"></a>
          <a href="<?php the_field('gallery__full-9') ?>"><img src="<?php the_field('gallery__item-9') ?>"></a>
          <a href="<?php the_field('gallery__full-10') ?>"><img src="<?php the_field('gallery__item-10') ?>"></a>
          <a href="<?php the_field('gallery__full-11') ?>"><img src="<?php the_field('gallery__item-11') ?>"></a>
          <a href="<?php the_field('gallery__full-12') ?>"><img src="<?php the_field('gallery__item-12') ?>"></a>
          <a href="<?php the_field('gallery__full-13') ?>"><img src="<?php the_field('gallery__item-13') ?>"></a>
          <a href="<?php the_field('gallery__full-14') ?>"><img src="<?php the_field('gallery__item-14') ?>"></a>
          <a href="<?php the_field('gallery__full-15') ?>"><img src="<?php the_field('gallery__item-15') ?>"></a>
          <a href="<?php the_field('gallery__full-16') ?>"><img src="<?php the_field('gallery__item-16') ?>"></a>
        </div>
      </div>
      <div class="main__img">
        <img src="<?php bloginfo( 'template_url' ); ?>/assets/images/main-img.png">
      </div>
    </div>
  </main>

<?php get_footer(); ?>
