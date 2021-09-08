---
preview: sift_GLAMpoints_mosaic.png
path: '/research/glampoints'
title: 'GLAMpoints [ICCV 2019]'
date: '2019-08-01'
featured: true
description: Key-point detection, image registration and mosaics, medical data

links:
    - type: arxiv
      link: https://arxiv.org/abs/1908.06812
    - type: github
      link: https://github.com/PruneTruong/GLAMpoints_pytorch
---


## <div align="center"><span style="color:MediumBlue">GLAMpoints: Greedily Learned Accurate Match points</span></div>
### <div align="center"><span style="color:Blue">ICCV 2019</span></div>
#### <div align="center"><span style="color:MediumSlateBlue">Prune Truong &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stefanos Apostolopoulos  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Agata Mosinska &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br> Samuel Stucky &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Carlos Ciller  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sandro De Zanet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></span></div>

<hr style="border:0.01px solid LightGray"> </hr>

<div style="display: flex;justify-content: space-around;width:100%">
	<div><a href="https://arxiv.org/abs/1908.06812"  style="text-decoration: none;color: DarkBlue "><b>Paper</b></a></div>
	<div><a href="https://github.com/PruneTruong/GLAMpoints_pytorch"  style="text-decoration: none;color: DarkBlue "><b>Code</b></a></div>
	<div><a href="https://drive.google.com/file/d/1706DRoMCr7adBnxws1iLcwUfJ1ClEant/view?usp=sharing"  style="text-decoration: none;color: DarkBlue "><b>Poster</b></a></div>
	<div><a href="https://www.retinai.com/glampoints"  style="text-decoration: none;color: DarkBlue "><b>Detailed Webpage</b></a></div>
</div>

<hr style="border:0.01px solid LightGray"> </hr>

<figure inline style="width: 100%">
  <img src="./images/glam.png">
  <figcaption>Summary of the steps for training GLAMpoints</figcaption>
</figure>

## Abstract
We introduce a novel CNN-based feature point detector - **GLAMpoints** - learned in a semi-supervised manner. Our detector extracts repeatable, stable interest points with a dense coverage, specifically designed to maximize the correct matching in a specific domain, which is in contrast to conventional techniques that optimize indirect metrics. In this paper, we apply our method on challenging retinal slitlamp images, for which classical detectors yield unsatisfactory results due to low image quality and insufficient amount of low-level features. We show that GLAMpoints significantly outperforms classical detectors as well as state-of-the-art CNN-based methods in matching and registration quality for retinal images. Our method can also be extended to other domains, such as natural images. Training code and model weights are available [here](https://github.com/PruneTruong/GLAMpoints_pytorch).



## How to cite:
```
@inproceedings{Truong2019GLAMpoints,
title = {{GLAMpoints}: Greedily Learned Accurate Match Points},
author = {Prune Truong and Stefanos Apostolopoulos and Agata Mosinska and 
	Samuel Stucky and Carlos Ciller and Sandro De Zanet},
booktitle = {{IEEE/CVF} International Conference on Computer Vision, {ICCV}},
year = {2019},
pages = {10731-10740}
}
```

