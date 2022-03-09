---
preview: thumnail.png
path: '/research/pdcnet+'
title: 'PDC-Net+ '
date: '2021-09-15'
featured: true
description: Extension of PDC-Net. Moving objects, indoor matching, localization and retrieval

links:
    - type: arxiv
      link: https://arxiv.org/abs/2109.13912
    - type: github
      link: https://github.com/PruneTruong/DenseMatching
---


# <div align="center"><span style="color:MediumBlue">PDC-Net+: Enhanced Probabilistic Dense Correspondence Network</span></div>
## <div align="center"><span style="color:Blue"> 2021 </span></div>
###<div align="center"><span style="color:MediumSlateBlue" >Prune Truong &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://martin-danelljan.github.io/"  style="text-decoration: none;color: MediumSlateBlue">Martin Danelljan</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://people.ee.ethz.ch/~timofter/"  style="text-decoration: none;color: MediumSlateBlue">Radu Timofte</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://ee.ethz.ch/the-department/faculty/professors/person-detail.OTAyMzM=.TGlzdC80MTEsMTA1ODA0MjU5.html"  style="text-decoration: none;color: MediumSlateBlue">Luc Van Gool</a></span></div>

<hr style="border:0.01px solid LightGray"> </hr>

<div style="display: flex;justify-content: space-around;width:100%">
	<div><a href="https://arxiv.org/abs/2109.13912"  style="text-decoration: none;color: DarkBlue;"><b>Paper</b></a></div>
	<div><a href="https://github.com/PruneTruong/DenseMatching" style="text-decoration: none;color: DarkBlue;"><b>Code</b></a></div>
</div>

<hr style="border:0.01px solid LightGray"> </hr>


## Abstract
Establishing robust and accurate correspondences between a pair of images is a long-standing computer vision problem with numerous applications. While classically dominated by sparse methods, emerging dense approaches offer a compelling alternative paradigm that avoids the keypoint detection step. However, dense flow estimation is often inaccurate in the case of large displacements, occlusions, or homogeneous regions. In order to apply dense methods to real-world applications, such as pose estimation, image manipulation, or 3D reconstruction, it is therefore crucial to estimate the confidence of the predicted matches.
We propose the Enhanced Probabilistic Dense Correspondence Network, PDC-Net+, capable of estimating accurate dense correspondences along with a reliable confidence map. We develop a flexible probabilistic approach that jointly learns the flow prediction and its uncertainty. In particular, we parametrize the predictive distribution as a constrained mixture model, ensuring better modelling of both accurate flow predictions and outliers. Moreover, we develop an architecture and an enhanced training strategy tailored for robust and generalizable uncertainty prediction in the context of self-supervised training. Our approach obtains state-of-the-art results on multiple challenging geometric matching and optical flow datasets. We further validate the usefulness of our probabilistic confidence estimation for the tasks of pose estimation, 3D reconstruction, image-based localization, and image retrieval.


## Visual Results:

* #### Aligning indoor images from ScanNet

We compute the flow field from the reference (middle) to the query (left). We plot the 1000 top confident matches as well. The warped query is represented on the right (and should resemble the middle). Only the regions for which the matches were predicted as confident are visible.

<figure>
<figcaption style="display: flex;justify-content: space-around;width:100%"> <div>Query</div> <div>Reference</div> <div><b>Warped query</b></div></figcaption>
<img src="./scannet/sub_709-min.gif">
</figure>


<figure>
<img src="./scannet/sub_740-min.gif">
</figure>

<figure>
<img src="./scannet/sub_742-min.gif">
</figure>

<figure>
<img src="./scannet/sub_744_2-min.gif">
</figure>
<figure>
<img src="./scannet/sub_746-min.gif">
</figure>


* #### Aligning video object segmentation data from DAVIS

Here, we warp the query images toward the reference images. Our approch PDC-Net+ also predicts a confidence mask along with the dense correspondences. We show the warped query only in the estimated confident regions.

<figure>
<figcaption style="display: flex;justify-content: space-around;width:100%"> <div>Query</div> <div>Reference</div> <div><b>Warped query</b></div></figcaption>
<img src="./davis/bear_0_82_mid_41_81-min.gif">
</figure>

<figure>
<figcaption style="display: flex;justify-content: space-around;width:100%"> <div>Query</div> <div>Reference</div> <div><b>Warped query</b></div></figcaption>
<img src="./davis/bus_0_80_mid_40_79-min.gif">
</figure>


## How to cite:
```
@inproceedings{pdcnet+,
  author    = {Prune Truong and
               Martin Danelljan and
               Radu Timofte and
               Luc Van Gool},
  title     = {PDC-Net+: Enhanced Probabilistic Dense Correspondence Network},
  booktitle = {Preprint},
  year      = {2021},
  url       = {https://arxiv.org/abs/2109.13912}
}
```

