---
preview: thumbnail.png
path: '/research/warpc'
title: 'Warp Consistency [ICCV 2021 - ORAL]'
date: '2021-06-15'
featured: true
description: Dense image matching, unsupervised learning

links:
    - type: arxiv
      link: https://arxiv.org/abs/2104.03308
    - type: github
      link: https://github.com/PruneTruong/DenseMatching
    - type: youtube
      link: https://www.youtube.com/watch?v=IsMotj7-peA
---


# <div align="center"><span style="color:MediumBlue">Warp Consistency for Unsupervised Learning of Dense Correspondences</span></div>
## <div align="center"><span style="color:Blue">ICCV 2021 - </span><span style="color:Red">ORAL</span></div>
###<div align="center"><span style="color:MediumSlateBlue" >Prune Truong &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://martin-danelljan.github.io/"  style="text-decoration: none;color: MediumSlateBlue">Martin Danelljan</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.yf.io/"  style="text-decoration: none;color: MediumSlateBlue">Fisher Yu</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://ee.ethz.ch/the-department/faculty/professors/person-detail.OTAyMzM=.TGlzdC80MTEsMTA1ODA0MjU5.html"  style="text-decoration: none;color: MediumSlateBlue">Luc Van Gool</a> </span></div>

<hr style="border:0.01px solid LightGray"> </hr>

<div style="display: flex;justify-content: space-around;width:100%">
	<div><a href="https://arxiv.org/abs/2104.03308"  style="text-decoration: none;color: DarkBlue;"><b>Paper</b></a></div>
	<div><a href="https://github.com/PruneTruong/DenseMatching" style="text-decoration: none;color: DarkBlue;"><b>Code</b></a></div>
	<div><a href="https://drive.google.com/file/d/1PCXkjxvVsjHAbYzsBtgKWLO1uE6oGP6p/view?usp=sharing"  style="text-decoration: none;color: DarkBlue "><b>Poster</b></a></div>
	<div><a href="https://www.youtube.com/watch?v=IsMotj7-peA"  style="text-decoration: none;color: DarkBlue "><b>Oral Video</b></a></div>
	<div><a href="https://drive.google.com/file/d/1mVpLBW55nlNJZBsvxkBCti9_KhH1r9V_/view?usp=sharing" style="text-decoration: none;color: DarkBlue "><b>Slides</b></a></div>
</div>

<hr style="border:0.01px solid LightGray"> </hr>

<figure inline style="width: 100%">
  <img src="./images/intro.png">
  <figcaption style="text-align: center">Estimating dense correspondences between the query (a) and the reference (b) image. The query is warped according to the resulting flows (c)-(d).
The baseline (c) does not estimate an uncertainty map and is therefore unable to filter the inaccurate flows at, for example occluded and homogeneous regions. In contrast, our PDC-Net (d) not only estimates accurate correspondences, but also when to trust them. It predicts a robust uncertainty map that identifies accurate matches and excludes incorrect and unmatched pixels (red).</figcaption>
</figure>


## Abstract
The key challenge in learning dense correspondences lies in the lack of ground-truth matches for real image pairs.
While photometric consistency losses provide unsupervised alternatives, they struggle with large appearance changes, which are ubiquitous in geometric and semantic matching tasks.
Moreover, methods relying on synthetic training pairs often suffer from poor generalisation to real data. 

We propose Warp Consistency, an unsupervised learning objective for dense correspondence regression. Our objective is effective even in settings with large appearance and view-point changes. 
Given a pair of real images, we first construct an image triplet by applying a randomly sampled warp to one of the original images. 
We derive and analyze all flow-consistency constraints arising between the triplet. From our observations and empirical results, we design a general unsupervised objective employing two of the derived constraints. 
We validate our warp consistency loss by training three recent dense correspondence networks for the geometric and semantic matching tasks. Our approach sets a new state-of-the-art on several challenging benchmarks, including MegaDepth, RobotCar and TSS. Code and models will be released [here](https://github.com/PruneTruong/DenseMatching). 


## How to cite:
```
@inproceedings{warpc,
  author    = {Prune Truong and
               Martin Danelljan and
               Fisher Yu and 
               Luc Van Gool},
  title     = {Warp Consistency for Unsupervised Learning of Dense Correspondences},
  booktitle = {{IEEE/CVF} International Conference on Computer Vision, {ICCV}},
  year = {2021},
  url       = {https://arxiv.org/abs/2104.03308}
}
```

