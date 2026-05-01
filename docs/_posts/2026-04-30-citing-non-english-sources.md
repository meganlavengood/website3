---
layout: post
title: "Citing non-English sources according to Chicago Manual of Style, 18th edition"
date: 2022-05-12 11:26:37 -0400
toc: true
banner: "/assets/posts/typewriter.jpg"
banner-alt: "close-up of a typewriter prototype for Chinese typesetting"
banner-caption: "Marcin Wichary, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via Wikimedia Commons"
lead: "While music theory is traditionally dominated by English speakers and US-based scholarship, more and more work relies on non-English citations. This guide helps with formatting those citations according to <i>Chicago Manual of Style</i> 18th edition, including Chinese, Japanese, and Korean sources."
---

<script>
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})
</script>

Let me start by clarifying that in my own scholarship, I rarely deal with foreign-language sources (hopefully this isn't too shameful an admission). But at George Mason University, where I teach Doctoral Research Methods, we have lots of international students who bring their expertise in their native language into their research. This post summarizes the relevant bits of _Chicago Manual of Style (CMOS)_, 18th edition, for any scholars **writing in English (using _CMOS_) but working with sources in other languages**.

One major caveat for everything in this post is that this information is context-dependent. This post is geared toward people writing scholarship in music studies (music theory, musicology, ethnomusicology, and so on). I am a music professor working with music students; the rules would be quite different for scholarship in a foreign language literature publication, for example, where we can assume readers' familiarity with other languages besides English.

I welcome any notes for improvement that anyone may have, especially those scholars that _do_ regularly engage with sources in these languages.

## Titles of works

### Capitalization (_CMOS_ 11.8)

All non-English titles are rendered in **sentence case**, rather than **title case**. So in English titles, we capitalize every word except the articles, prepositions, and conjunctions, and we call this "title case," but it is actually an English-language quirk that doesn't exist in other languages. If it's not English, we don't do that. Also beware that German has its own capitalization system that you don't want to mess with.

<div class="d-flex flex-row flex-wrap justify-content-around gap-2">
<div class="alert alert-success col-md-6">
<b><i class="bi bi-check-circle-fill"></i> Correct capitalization</b><hr/>
<ul>
<li><p><i>Mille plateaux</i> <span class="badge rounded-pill text-bg-success float-end" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Don't use title case on non-English titles—use sentence case instead.">why?</span></p></li>
<li><p><i>Ökonomisch-philosophische Manuskripte aus dem Jahre 1844</i> <span class="badge rounded-pill text-bg-success float-end" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="In German, all nouns are capitalized, always. Preserve the German capitalization style in German titles.">why?</span></p></li>
</ul>
</div>
<div class="alert alert-danger col-md-6">
<b><i class="bi bi-x-circle-fill"></i> Incorrect capitalization</b><hr/>
<ul>
<li><p><i><span lang="fr">Mille Plateaux</span></i></p></li>
<li><p><i><span lang="de">Ökonomisch-philosophische manuskripte aus dem jahre 1844</span></i></p></li>
</ul>
</div></div>

### Translations of titles of works (_CMOS_ 11.11)

If you are using a foreign title, the translated title may follow. If you're in-text, use parentheses to enclose the translation, but if you're in the bibliography, use square brackets (as parentheses are used for other things, like page ranges).

But how do you format it within those parentheses/square brackets? It depends!

- If the translated title comes from a published translation of the entire work:
  - the translated title gets formatted like the original title (so, italics for books, quotation marks for articles, etc.)
  - the translated title is rendered in title case
- If the translated title is just your translation (the translation of the work is unpublished/nonexistent):
  - set the title in plain Roman text—no italics, no quotes
  - the translated title is rendered in sentence case

So official translation = official-looking formatting.

<div class="d-flex flex-row flex-wrap justify-content-around gap-2">
<div class="alert alert-success">
<b><i class="bi bi-check-circle-fill"></i> Correct formatting</b><hr/>
<ul>
<li><p><i><span lang="fr">Mille plateaux</span> (A Thousand Plateaus)</i> <span class="badge rounded-pill text-bg-success float-end" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="This is the title of a published translation, so it's italicized and set in title case.">why?</span></p></li>
<li><p>“<span lang="zh">Wo yilai tantan suowei guoyue wenti</span>” (On the purported issue of national music) <span class="badge rounded-pill text-bg-success float-end" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="This is not a published translation, but the author's own translation, so for the translated title, there are no quotation marks and it's set in sentence case.">why?</span></p></li>
</ul>
<hr><b>Note:</b> if these titles are in a bibliography, use square brackets rather than parentheses.
</div></div>

As for which to use, use the one that makes more sense for your audience. _CMOS_ does allow that, as long as you make clear whether or not something has been published in English in the main text, it's fine to use formatted English-language translated titles.

### Translations of publisher names: don't

_CMOS_ 14.35 clarifies that the names of publishers should _not_ be translated. Capitalization should be preserved as in the original language.

## Translated quotations

Anytime you are translating something, it's good scholarly practice to also include the original-language version of the quote somewhere nearby. A great option is to put the English translation inline, and put the original text in a footnote, as in [this example](https://www.mtosmt.org/issues/mto.19.25.4/mto.19.25.4.nicolas.html#:~:text=For%20example%2C%20in,498–99):

<figure class="text-start">
<blockquote class="blockquote small">
<p>For example, in the succession of seventh chords, says Rameau, “we need only bring down, alternately, two contiguous fingers on the adjoining keys [of the keyboard], from one chord to another, so that the dissonances are always rigorously prepared and resolved. [ . . . ] The sole arrangement of the fingers tells us those that should move” (1730b, 498–99).<sup>9</sup></p>
<hr/>
<small>9. “<span lang="fr">Comme la dissonance est le guide le plus assuré des successions, on commence par celle des Accords dissonans entr’eux, où il ne s’agit que de faire descendre alternativement deux doigts contigus sur les touches voisines de celles qu’ils occupent, & cela d’un Accord à un autre; de sorte que les dissonances y sont toujours préparees & sauvées dans la derniere rigueur. [ . . . ] Le seul arrangement des doigts fait sentir ceux qu’il faut mouvoir</span>.”</small></blockquote><figcaption class="blockquote-footer">Source: Patrice Nicolas, “Challenging Some Misconceptions about the <i><span lang="fr">Règle de l’octave</span></i>,” <i>Music Theory Online</i> 25, no. 4 (2019), https://doi.org/10.30535/mto.25.4.5.</figcaption>
</figure>

Another option is to [put the two texts side-by-side](https://mtosmt.org/issues/mto.24.30.1/mto.24.30.1.lam.html#:~:text=The%20theoretical%20expression,understand%20and%20comprehend.), but this is a little harder to do in a word processor—you may want to use a table or text boxes to achieve this.

### Citing your translation (_CMOS_ 11.15–16)

Always make clear where your translation comes from.

It's best to use a published translation wherever possible, and where you do, to cite that translation following _CMOS_ guidelines. If you've translated the quotations yourself, you can say that too. I often see authors simply say something like "translation mine". If you used translation software or an AI tool, state that too: "translation generated by DeepL" would be adequate citation.

As for where to put these citations, you can either put them in parentheticals after your quoted material, or you can make a blanket statement about the source of all translations at the beginning of the work (for example, "Unless stated otherwise, all translations are my own.")

## Special considerations for sources in Chinese, Japanese, or Korean

### Transliteration or Romanization (_CMOS_ 11.78–82, 11.87, 11.98)

Chinese, Japanese, and Korean are all languages that use an entirely different character set than English. (There are other such languages too, like Greek or Russian, but this post focuses on Chinese, Japanese, and Korean just because those are the languages my students use more). Because English speakers are usually totally unfamiliar with how to pronounce or read these other character systems, these languages are often Romanized—rendered in the Latin alphabet—for English-language publications. Each language has standard ways of Romanizing their writing system, such as [pinyin](https://en.wikipedia.org/wiki/Pinyin) for Chinese. _CMOS_ has information on each of these systems, as well.

**There is no equivalent to uppercase or italics** in Chinese, Japanese, and Korean, but when these languages are transliterated, italics and capitalization are added to follow the norms set out elsewhere in _CMOS_: for titles, use sentence case (not title case, because they are foreign-language titles), and if it's a large work, italics. Proper nouns are also typically capitalized in titles and elsewhere.

### Including Chinese, Japanese, and/or Korean characters (_CMOS_ 11.99)

Providing Chinese, Japanese, or Korean characters in your English-language scholarship is _optional_, so if all this seems too complex, you may choose not to include them and save yourself some trouble.

However, many people choose to include characters alongside transliterations, because they're quite useful. Transliterations of non-Latin alphabets are used for the convenience of readers who don't know those writing systems, but inherent in all transliterations is the possibility of different people transliterating differently. And of course, those who can read the original writing system will prefer that system. For this reason, it's a good idea to include the original characters of Chinese, Japanese, or Korean alongside the transliterations that _CMOS_ requires. I'll focus in my examples on Chinese, but the same concepts apply to all three writing systems, and _CMOS_ provides examples of all.

**Providing characters in-text**, e.g., for a term, is pretty simple: after the transliterated term, provide the characters. In the example below, notice:

- the characters are always presented without additional quotation marks or italics
- the translated terms are in parentheses and also without additional quotation marks or italics.

<figure class="text-start">
<blockquote class="blockquote small">
Example 2.4 shows an excerpt of the <span lang="zh"><i>qupai</i></span> 曲牌 (fixed tune) called “<span lang="zh">Shuilong yin</span>” 水龍吟 (Water dragon chant) played by the <span lang="zh">Hua</span> 滑 family band from <span lang="zh">Yanggao, Shanxi</span> province (Jones 2007, 91–99).</blockquote><figcaption class="blockquote-footer">Source: Nathan L. Lam, “Pentatonic <i><span lang="zh">Xuangong</span></i> 旋宮 Transformations in Chinese Music,” <i>Music Theory Online</i> 30, no. 1 (2024), https://doi.org/10.30535/mto.30.1.5.<span data-bs-toggle="tooltip" data-bs-placement="right" data-bs-html="true" data-bs-title="In the original, you'll notice that quotation marks actually <i>are</i> used for the English translated title of the <i>qupai</i> but after studying <i>CMOS</i> I'm reasonably certain this is incorrect.">*</span></figcaption></figure>

**Providing characters for a bibliography entry or citation** gets a little more hairy, especially when you also want to include English translations, but there is an underlying logic. In the citation below, notice the following features:

1. **For an author:** first provide the transliterated name, then characters.
2. **For a title of a smaller work (article, book chapter):** first provide the transliterated title in quotation marks, then the characters, then the translated title in square brackets. All use sentence case (unless the translation is published, in which case the English title is set in title case).
3. **For the title of a larger work (book, journal):** first provide the transliterated title in italics, then the characters, then the translated title in square brackets and Roman (non-italic) type. Note that journal names need not be translated.

<div class="d-flex flex-row flex-wrap justify-content-around gap-2">
<div class="alert alert-success col-md-6">
<b><i class="bi bi-check-circle-fill"></i> Correct formatting</b><hr/>
<ul>
<li><p>Cao Baoming and Zhang Hongjiang. 2011. <em>Nitulingqi: Dongbei Errenzhuan</em> 泥土灵气: 东北二人转 [The Vital Spirit of the Soil: Northeastern Errenzhuan]. Heilongjiang People’s Publishing House.</p></li>
<li><p>Li Laizhang 李來璋. 1985. "Wudiaochaoyuan" 五調朝元 [Five-mode cycle]. <i>Yinyue Yanjiu</i> 音樂研究 1985 (4): 93–101.</p></li>
<li><p>Liu Beini 劉貝妮. 2013. "'Xuangong fangshi' yanjiu zongshu" "旋宮方式" 研究綜述 [A critical survey of the "xuangong method"]. <i>Xinghai yinyue xueyuan xuebao</i> 星海音樂學院學報 133: 92–100.</p></li>
</ul>
</div>
<div class="alert alert-danger col-md-6">
<b><i class="bi bi-x-circle-fill"></i> Incorrect formatting</b><hr/>
<ul>
<li><p>Cao Baoming and Zhang Hongjiang. 2011. <em>Nitulingqi: Dongbei Errenzhuan</em> 泥土灵气: 东北二人转 [<i>The Vital Spirit of the Soil: Northeastern Errenzhuan</i>]. Heilongjiang People’s Publishing House. <span class="badge rounded-pill text-bg-danger float-end" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Don't italicize the translated title, and use sentence case for unpublished title translations.">what's wrong?</span></p></li>
<li><p>Li Laizhang 李來璋. 1985. "Wudiaochaoyuan 五調朝元 [Five-mode cycle]". Yinyue Yanjiu 音樂研究 1985 (4): 93–101.<span class="badge rounded-pill text-bg-danger float-end" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="The end-quote should go after the pinyin title (Wudiaochaoyuan), not the translation. The journal name (Yinyue Yanjiu) should be italicized.">what's wrong?</span></p></li>
<li><p>Liu Beini 劉貝妮. 2013. ‘Xuangong fangshi’ yanjiu zongshu ‘旋宮方式’ 研究綜述 [A critical survey of the ‘<i>xuangong</i> method’]. Xinghai yinyue xueyuan xuebao 星海音樂學院學報 <i>Journal of Xinghai Conservatory of Music</i> 133: 92–100.<span class="badge rounded-pill text-bg-danger float-end" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="The pinyin article title should be surrounded in double-quotes (the single quotes around Xuangong fangshi would be preserved, since it's a quote-within-a-quote). Then, in both the Chinese characters and the English translation of the title, double quotes should be used instead of single quotes, because the outer quotation marks are not used to surround the title. The pinyin journal title should be italicized. The English translation of the journal title is not necessary to include; if it is included, it should be in square brackets and Roman type.">what's wrong?</span></p></li>
</ul>
</div></div>

Once again, it may be nice to know that including these characters is totally optional according to _CMOS_. There are scholarly benefits but it does open up a can of worms formatting-wise.

## Conclusion

I've done my best here to summarize a lot of different parts of _CMOS_ into easily digestible language. For complete details on these matters, you'll need to look at _CMOS_ yourself. If you're affiliated with an institution, you'll have access through your library. I probably made mistakes. I don't read Chinese and I rarely work with sources in any foreign language at all. If you notice something that could be fixed, please get in touch (you can find my email on my [faculty bio](https://music.gmu.edu/profiles/mlavengo)).
