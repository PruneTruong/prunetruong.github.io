---
preview: pwarpc.png
path: '/research/pwarpc'
title: 'PWarpC [CVPR 2022]'
date: '2022-03-15'
featured: true
description: semantic matching, weakly-supervised

links:
    - type: arxiv
      link: https://arxiv.org/abs/2203.04279
    - type: github
      link: https://github.com/PruneTruong/DenseMatching
---


# <div align="center"><span style="color:MediumBlue">Probabilistic Warp Consistency for Weakly-Supervised Semantic Correspondences</span></div>
## <div align="center"><span style="color:Blue">CVPR 2022</div>
###<div align="center"><span style="color:MediumSlateBlue" >Prune Truong &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://martin-danelljan.github.io/"  style="text-decoration: none;color: MediumSlateBlue">Martin Danelljan</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.yf.io/"  style="text-decoration: none;color: MediumSlateBlue">Fisher Yu</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://ee.ethz.ch/the-department/faculty/professors/person-detail.OTAyMzM=.TGlzdC80MTEsMTA1ODA0MjU5.html"  style="text-decoration: none;color: MediumSlateBlue">Luc Van Gool</a> </span></div>

<hr style="border:0.01px solid LightGray"> </hr>

<div style="display: flex;justify-content: space-around;width:100%">
	<div><a href="https://arxiv.org/abs/2203.04279"  style="text-decoration: none;color: DarkBlue;"><b>Paper</b></a></div>
	<div><a href="https://github.com/PruneTruong/DenseMatching" style="text-decoration: none;color: DarkBlue;"><b>Code</b></a></div>
</div>

<hr style="border:0.01px solid LightGray"> </hr>


## Abstract
We propose Probabilistic Warp Consistency, a weakly-supervised learning objective for semantic matching. Our approach directly supervises the dense matching scores predicted by the network, encoded as a conditional probability distribution. We first construct an image triplet by applying a known warp to one of the images in a pair depicting different instances of the same object class. Our probabilistic learning objectives are then derived using the constraints arising from the resulting image triplet. We further account for occlusion and background clutter present in real image pairs by extending our probabilistic output space with a learnable unmatched state. To supervise it, we design an objective between image pairs depicting different object classes. We validate our method by applying it to four recent semantic matching architectures. Our weakly-supervised approach sets a new state-of-the-art on four challenging semantic matching benchmarks. Lastly, we demonstrate that our objective also brings substantial improvements in the strongly-supervised regime, when combined with keypoint annotations. 



## How to cite:
```
@inproceedings{probabilistic_warpc,
  author    = {Prune Truong and
               Martin Danelljan and
               Fisher Yu and 
               Luc Van Gool},
  title     = {Probabilistic Warp Consistency for Weakly-Supervised Semantic Correspondences},
  booktitle = {{IEEE/CVF} Conference on Computer Vision and Pattern Recognition, {CVPR}},
  year = {2022},
  url  = {https://arxiv.org/abs/2203.04279}
}
```

