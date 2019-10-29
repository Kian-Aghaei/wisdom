import React from 'react';
import Masonry from 'react-masonry-component';
import Pagination from './Pagination';

const Content = () => (
  <section className="s-content">
    <Masonry className="row masonry-wrap">
      <article className="masonry__brick masonry-entry format-standard" data-aos="fade-up">
        <div className="entry__thumb">
          <a href="single-standard.html" className="entry__thumb-link">
            <img src="images/thumbs/masonry/logical-positivism.jpg" alt="" />
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <div className="entry__date">
              <a href="single-standard.html">August 14, 2019</a>
            </div>
            <h1 className="entry__title"><a href="single-standard.html">Einstein vs Logical Positivism</a></h1>
          </div>
          <div className="entry__excerpt">
            <p>
                Logical positivism was a philosophical movement of the 1920s
                and 30s which wanted to introduce the methodology of science and
                mathematics to philosophy.
            </p>
          </div>
          <div className="entry__meta">
            <span className="entry__meta-links">
              <a href="category.html">Metaphysics</a>
              <a href="category.html">Empiricism</a>
            </span>
          </div>
        </div>

      </article>

      <article className="masonry__brick masonry-entry format-quote" data-aos="fade-up">
        <div className="entry__thumb">
          <blockquote>
            <p>
                Belief is nothing but a more vivid, lively, forcible, firm, steady
                conception of an object, than what the imagination alone is ever able to attain.
            </p>
            <cite>David Hume</cite>
          </blockquote>
        </div>
      </article>

      <article className="masonry__brick masonry-entry format-standard" data-aos="fade-up">
        <div className="entry__thumb">
          <a href="single-standard.html" className="entry__thumb-link">
            <img src="images/thumbs/masonry/Husserl.jpg" alt="" />
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <div className="entry__date">
              <a href="single-standard.html">August 14, 2019</a>
            </div>
            <h1 className="entry__title"><a href="single-standard.html">Science & Phenomenology</a></h1>
          </div>
          <div className="entry__excerpt">
            <p>
                What would come to mind if I asked you about phenomenology,
                the systematic study of human experience?
            </p>
          </div>
          <div className="entry__meta">
            <span className="entry__meta-links">
              <a href="category.html">Phenomenology</a>
            </span>
          </div>
        </div>
      </article>

      <article className="masonry__brick masonry-entry format-standard" data-aos="fade-up">
        <div className="entry__thumb">
          <a href="single-standard.html" className="entry__thumb-link">
            <img src="images/thumbs/masonry/Nietzsche.jpg" alt="" />
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <div className="entry__date">
              <a href="single-standard.html">August 14, 2019</a>
            </div>
            <h1 className="entry__title"><a href="single-standard.html">Marx & Nietzsche</a></h1>
          </div>
          <div className="entry__excerpt">
            <p>
                Although neither of them actually lived in it,
                Marx and Nietzsche were among the most
                important thinkers for the Twentieth Century.
                Their influence on its minds and events
                was profound as they radically transformed
                the way we think about the individual,
                society, and the human condition.
            </p>
          </div>
          <div className="entry__meta">
            <span className="entry__meta-links">
              <a href="category.html">Marxism</a>
              <a href="category.html">Power</a>
            </span>
          </div>
        </div>
      </article>

      <article className="masonry__brick masonry-entry format-standard" data-aos="fade-up">
        <div className="entry__thumb">
          <a href="single-standard.html" className="entry__thumb-link">
            <img src="images/thumbs/masonry/George-Orwell.jpg" alt="" />
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <div className="entry__date">
              <a href="single-standard.html">August 15, 2019</a>
            </div>
            <h1 className="entry__title"><a href="single-standard.html">Can Art Fight Fascism?</a></h1>
          </div>
          <div className="entry__excerpt">
            <p>
                At a time when populist movements are on the march throughout the world,
                why should we pay attention to art? Isn’t it self-indulgent to concern
                oneself with art, music, or literature when the foundations of society
                and of the international order are being shaken?
            </p>
          </div>
          <div className="entry__meta">
            <span className="entry__meta-links">
              <a href="category.html">Art</a>
              <a href="category.html">Fascism</a>
            </span>
          </div>
        </div>
      </article>

      <article className="masonry__brick masonry-entry format-video" data-aos="fade-up">
        <div className="entry__thumb video-image">
          <a href="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0" data-lity>
            <img src="images/thumbs/masonry/Napoleon.jpg" alt="" />
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <div className="entry__date">
              <a href="single-video.html">August 15, 2019</a>
            </div>
            <h1 className="entry__title"><a href="single-video.html">Hegel on History</a></h1>
          </div>
          <div className="entry__excerpt">
            <p>
                We are often taught that history is nothing but the record of past events.
                Yet Georg Wilhelm Friedrich Hegel (1770-1831) thought that world history was
                not just a random sequence of happenings but progressed rationally,
                according to a specific purpose.
            </p>
          </div>
          <div className="entry__meta">
            <span className="entry__meta-links">
              <a href="category.html">History</a>
              <a href="category.html">Hegel</a>
            </span>
          </div>
        </div>
      </article>

      <article className="masonry__brick masonry-entry format-audio" data-aos="fade-up">
        <div className="entry__thumb">
          <a href="single-audio.html" className="entry__thumb-link">
            <img src="images/thumbs/masonry/phenom.jpg" alt="" />
          </a>
          <div className="audio-wrap">
            <track />
            <audio id="player" src="media/AirReview-Landmarks-02-ChasingCorporate.mp3" width="100%" height="42" controls="controls">
              <track kind="captions" />
            </audio>
          </div>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <div className="entry__date">
              <a href="single-audio.html">August 16, 2019</a>
            </div>
            <h1 className="entry__title">
              <a href="single-audio.html">
                Abortion & Phenomenology
              </a>
            </h1>
          </div>
          <div className="entry__excerpt">
            <p>
                The issue of abortion remains one of the most emotive, politicised,
                and socially divisive controversies of our time. Both the pro- and anti-
                sides are driven by strong and often dogmatic beliefs,
                making them appear irreconcilable.
            </p>
          </div>
          <div className="entry__meta">
            <span className="entry__meta-links">
              <a href="category.html">Ethic</a>
              <a href="category.html">Phenomenology</a>
            </span>
          </div>
        </div>
      </article>

      <article className="masonry__brick masonry-entry format-link" data-aos="fade-up">

        <div className="entry__thumb">
          <div className="link-wrap">
            <p>The Only Resource You Will Need To Start with Philosophy.</p>
            <cite>
              <a target="_blank" rel="noopener noreferrer" href="https://https://kian-aghaei.dev/">https://https://kian-aghaei.dev</a>
            </cite>
          </div>
        </div>

      </article>

      <article className="masonry__brick masonry-entry format-standard" data-aos="fade-up">
        <div className="entry__thumb">
          <a href="single-standard.html" className="entry__thumb-link">
            <img src="images/thumbs/masonry/anarchism.jpg" alt="" />
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <div className="entry__date">
              <a href="single-standard.html">August 15, 2019</a>
            </div>
            <h1 className="entry__title"><a href="single-standard.html">A Brief Explanation of Anarchism</a></h1>
          </div>
          <div className="entry__excerpt">
            <p>
                Anarchism has been making headlines lately.
                Anarchists recently supposedly disturbed the
                peace during protests at the University of California in Berkeley simply because,
                according to one witness, “they just want to fight.”
            </p>
          </div>
          <div className="entry__meta">
            <span className="entry__meta-links">
              <a href="category.html">Anarchism</a>
              <a href="category.html">Politics</a>
            </span>
          </div>
        </div>
      </article>

      <article className="masonry__brick masonry-entry format-standard" data-aos="fade-up">
        <div className="entry__thumb">
          <a href="single-standard.html" className="entry__thumb-link">
            <img src="images/thumbs/masonry/Huckleberry-Finn.jpg" alt="" />
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <div className="entry__date">
              <a href="single-standard.html">August 15, 2019</a>
            </div>
            <h1 className="entry__title"><a href="single-standard.html">Moral Education for Digital Natives</a></h1>
          </div>
          <div className="entry__excerpt">
            <p>
                Much is made these days of the fact we live in a post-truth society,
                and that, despite our instant access to more information than ever before,
                we still seek out the stories that reinforce our existing beliefs and biases.
            </p>
          </div>
          <div className="entry__meta">
            <span className="entry__meta-links">
              <a href="category.html">Ethics</a>
            </span>
          </div>
        </div>
      </article>

      <article className="masonry__brick masonry-entry format-standard" data-aos="fade-up">
        <div className="entry__thumb">
          <a href="single-standard.html" className="entry__thumb-link">
            <img src="images/thumbs/masonry/Aristotle-and-Plato.jpg" alt="" />
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <div className="entry__date">
              <a href="single-standard.html">August 16, 2019</a>
            </div>
            <h1 className="entry__title"><a href="single-standard.html">Aristotle on Forming Friendships</a></h1>
          </div>
          <div className="entry__excerpt">
            <p>
                Although he lived long ago, the ethical writings of the Greek
                philosopher Aristotle (384-322 BCE) still have relevance to the
                present day, particularly when we want to understand the meaning of friendship.
            </p>
          </div>
          <div className="entry__meta">
            <span className="entry__meta-links">
              <a href="category.html">Greek</a>
              <a href="category.html">lifestyle</a>
            </span>
          </div>
        </div>
      </article>

      <article className="masonry__brick masonry-entry format-standard" data-aos="fade-up">
        <div className="entry__thumb">
          <a href="single-standard.html" className="entry__thumb-link">
            <img src="images/thumbs/masonry/Heidegger.jpg" alt="" />
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <div className="entry__date">
              <a href="single-standard.html">August 15, 2019</a>
            </div>
            <h1 className="entry__title"><a href="single-standard.html">Heidegger’s Ways of Being</a></h1>
          </div>
          <div className="entry__excerpt">
            <p>
                “If I take death into my life, acknowledge it, and face it squarely,
                I will free myself from the anxiety of death and the pettiness of
                life – and only then will I be free to become myself.”
            </p>
          </div>
          <div className="entry__meta">
            <span className="entry__meta-links">
              <a href="category.html">Existentialism</a>
              <a href="category.html">Death</a>
            </span>
          </div>
        </div>
      </article>
    </Masonry>
    <Pagination />
  </section>

);

export default Content;
