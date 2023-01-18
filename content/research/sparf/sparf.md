---
preview: thumnail.png
path: '/research/sparf'
title: 'SPARF'
date: '2022-11-15'
featured: true
description: NeRF from sparse images and noisy poses, novel-view synthesis, pose refinement

links:
    - type: arxiv
      link: https://arxiv.org/abs/2211.11738
---


# <div align="center"><span style="color:MediumBlue">SPARF: Neural Radiance Fields from Sparse and Noisy Poses</span></div>
## <div align="center"><span style="color:Blue"> 2022 </span></div>
###<div align="center"><span style="color:MediumSlateBlue" >Prune Truong &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.lix.polytechnique.fr/Labo/Marie-Julie.RAKOTOSAONA/"  style="text-decoration: none;color: MediumSlateBlue">Marie-Julie Rakotosaona</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://campar.in.tum.de/Main/FabianManhardt"  style="text-decoration: none;color: MediumSlateBlue">Fabian Manhardt</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://federicotombari.github.io/"  style="text-decoration: none;color: MediumSlateBlue">Federico Tombari</a></span></div>


<hr style="border:0.01px solid LightGray"> </hr>

<div style="display: flex;justify-content: space-around;width:100%">
	<div><a href="https://arxiv.org/abs/2211.11738"  style="text-decoration: none;color: DarkBlue;"><b>Paper</b></a></div>
</div>

<hr style="border:0.01px solid LightGray"> </hr>




## Abstract
Neural Radiance Field (NeRF) has recently emerged as a powerful representation to synthesize photorealistic novel views. While showing impressive performance, it relies on the availability of dense input views with highly accurate camera poses, thus limiting its application in real-world scenarios. In this work, we introduce Sparse Pose Adjusting Radiance Field (SPARF), to address the challenge of novel-view synthesis given only few wide-baseline input images (as low as 3) with noisy camera poses. Our approach exploits multi-view geometry constraints in order to jointly learn the NeRF and refine the camera poses. By relying on pixel matches extracted between the input views, our multi-view correspondence objective enforces the optimized scene and camera poses to converge to a global and geometrically accurate solution. Our depth consistency loss further encourages the reconstructed scene to be consistent from any viewpoint. Our approach sets a new state of the art in the sparse-view regime on multiple challenging datasets.



## How to cite:
```
@inproceeding{truongsparf,
  url = {https://arxiv.org/abs/2211.11738},
  author = {Truong, Prune and Rakotosaona, Marie-Julie and Manhardt, Fabian and Tombari, Federico},
  title = {SPARF: Neural Radiance Fields from Sparse and Noisy Poses},
  publisher = {arXiv},
  year = {2022},
}

```

