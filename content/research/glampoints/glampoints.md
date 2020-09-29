---
preview: sift_GLAMpoints_mosaic.png
path: '/research/glampoints'
title: 'GLAMpoints [ICCV 2019]'
date: '2019-08-01'
featured: true
description: Key-point detection, image registration and mosaics, medical data

links:
    - type: github
      link: https://github.com/PruneTruong/GLAMpoints_pytorch
    - type: arxiv
      link: https://arxiv.org/abs/1908.06812
---

# <div align="center">GLAMpoints: Greedily Learned Accurate Match points</div>
## <div align="center">ICCV 2019</div>
## <div align="center">Prune Truong, Stefanos Apostolopoulos, Agata Mosinska, Samuel Stucky, Carlos Ciller, Sandro~De~Zanet</div>



<figure inline style="width: 100%">
  <img src="./images/method_2.png">
  <figcaption>a) Training steps for an image pair I_i and I'_i at epoch $i$ created from a particular base image $B$. $I_i$ and $I'_i$ are created by warping B according to homographies $g_i$ and $g'_i$ respectively. $a_i$ and $a'_i$ refer to the additional appearance augmentations applied to each image. b) Loss computation corresponding to situation a. c) Schematic representation of Unet-4</figcaption>
</figure>

## Abstract
We introduce a novel CNN-based feature point detector - \ac{GLAMpoints} - learned in a semi-supervised manner. Our detector extracts repeatable, stable interest points with a dense coverage, specifically designed to maximize the correct matching in a specific domain, which is in contrast to conventional techniques that optimize indirect metrics. In this paper, we apply our method on challenging retinal slitlamp images, for which classical detectors yield unsatisfactory results due to low image quality and insufficient amount of low-level features. We show that GLAMpoints significantly outperforms classical detectors as well as state-of-the-art CNN-based methods in matching and registration quality for retinal images. Our method can also be extended to other domains, such as natural images. Training code and model weights are available [here](https://github.com/PruneTruong/GLAMpoints_pytorch).



## Visual Results:

* Aligning images of the ETH3D dataset

Here, we warp the source images toward the target image. We compare our GLU-Net to state-of-the-art optical flow method PWC-Net and geometric matching method DGC-Net. 

<div class="flex-row">
    <figure>
      <img src="./ETH3D/playground_0_40_source.gif">
      <figcaption>Source images</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/playground_0_40_target.gif">
      <figcaption>Target image</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/playground_0_40_GLUNet.gif">
      <figcaption>**GLU-Net (Ours)**</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/playground_0_40_PWCNet.gif">
      <figcaption>PWC-Net</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/playground_0_40_DGCNet.gif">
      <figcaption>DGC-Net </figcaption>
    </figure>
</div>


## How to cite:
```
@inproceedings{Truong2019GLAMpoints,
		  title={GLAMpoints: Greedily Learned Accurate Match Points},
		  author={Prune Truong and Stefanos Apostolopoulos and Agata Mosinska and Samuel Stucky and Carlos Ciller and Sandro De Zanet},
		  journal={2019 IEEE/CVF International Conference on Computer Vision (ICCV)},
		  year={2019},
		  pages={10731-10740}
}
```

