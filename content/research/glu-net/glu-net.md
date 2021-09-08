---
preview: ./intro_images_2.png
path: '/research/glu-net'
title: 'GLU-Net [CVPR 2020 - ORAL]'
date: '2020-04-01'
featured: true
description: Dense image matching, optical flow, geometric matching, semantic matching 

links:
    - type: arxiv
      link: https://arxiv.org/abs/1912.05524
    - type: github
      link: https://github.com/PruneTruong/GLU-Net
    - type: youtube
      link: https://www.youtube.com/watch?v=xB2gNx8f8Xc&feature=emb_title
---


# <div align="center"><span style="color:MediumBlue">GLU-Net: Global-Local Universal Network for dense flow and correspondences</span></div>
## <div align="center"><span style="color:Blue">CVPR 2020 - ORAL</span></div>
#### <div align="center"><span style="color:MediumSlateBlue">Prune Truong &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://martin-danelljan.github.io/"  style="text-decoration: none;color: MediumSlateBlue">Martin Danelljan</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://people.ee.ethz.ch/~timofter/"  style="text-decoration: none;color: MediumSlateBlue">Radu Timofte</a></span></div>

<hr style="border:0.01px solid LightGray"> </hr>

<div style="display: flex;justify-content: space-around;width:100%">
	<div><a href="https://arxiv.org/abs/1912.05524"  style="text-decoration: none;color: DarkBlue "><b>Paper</b></a></div>
	<div><a href="https://github.com/PruneTruong/GLU-Net"  style="text-decoration: none;color: DarkBlue "><b>Code</b></a></div>
	<div><a href="https://drive.google.com/file/d/1pS_OMZ83EG-oalD-30vDa3Ru49GWi-Ky/view?usp=sharing"  style="text-decoration: none;color: DarkBlue "><b>Poster</b></a></div>
	<div><a href="https://www.youtube.com/watch?v=xB2gNx8f8Xc&feature=emb_title"  style="text-decoration: none;color: DarkBlue "><b>Oral Video</b></a></div>
	<div><a href="https://www.youtube.com/watch?v=s5OUdkM9QLo"  style="text-decoration: none;color: DarkBlue "><b>Teaser Video</b></a></div>
	<div><a href="https://drive.google.com/file/d/1BE-X58V7DTPoJwxPkfCyPNb1WISauwqK/view?usp=sharing" style="text-decoration: none;color: DarkBlue "><b>Slides</b></a></div>
</div>

<hr style="border:0.01px solid LightGray"> </hr>


<figure inline style="width: 100%">
  <img src="./glunet.png">
  <figcaption>GLU-Net architecture</figcaption>
</figure>

## Abstract
Establishing dense correspondences between a pair of images is an important and general problem, covering geometric matching, optical flow and semantic correspondences. While these applications share fundamental challenges, such as large displacements, pixel-accuracy, and appearance changes, they are currently addressed with specialized network architectures, designed for only one particular task. This severely limits the generalization capabilities of such networks to new scenarios, where e.g. robustness to larger displacements or higher accuracy is required.

In this work, we propose a universal network architecture that is directly applicable to all the aforementioned dense correspondence problems. We achieve both high accuracy and robustness to large displacements by investigating the combined use of global and local correlation layers. We further propose an adaptive resolution strategy, allowing our network to operate on virtually any input image resolution.
The proposed GLU-Net achieves state-of-the-art performance for geometric and semantic matching as well as optical flow, when using the same network and weights. Code and trained models are available [here](https://github.com/PruneTruong/GLU-Net).




## Visual Results:

* #### Aligning images of the ETH3D dataset

Here, we warp the source images toward the target image. We compare our GLU-Net to state-of-the-art optical flow method PWC-Net and geometric matching method DGC-Net. 

<div class="flex-row">
    <figure>
      <img src="./ETH3D/playground_135_207_158_source.gif">
      <figcaption>Source images</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/playground_135_207_158_target.gif">
      <figcaption>Target image</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/playground_135_207_158_GLUNet.gif">
      <figcaption><span style="red"><b style='red'>GLU-Net (Ours)</b></span></figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/playground_135_207_158_PWCNet.gif">
      <figcaption>PWC-Net</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/playground_135_207_158_DGCNet.gif">
      <figcaption>DGC-Net </figcaption>
    </figure>
</div>

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
      <figcaption><b>GLU-Net (Ours)</b></figcaption>
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

<div class="flex-row">
    <figure>
      <img src="./ETH3D/storage_room_2_170_200_source.gif">
      <figcaption>Source images</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/storage_room_2_170_200_target.gif">
      <figcaption>Target image</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/storage_room_2_170_200_GLUNet.gif">
      <figcaption><b>GLU-Net (Ours)</b></figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/storage_room_2_170_200_PWCNet.gif">
      <figcaption>PWC-Net</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/storage_room_2_170_200_DGCNet.gif">
      <figcaption>DGC-Net </figcaption>
    </figure>
</div>


<div class="flex-row">
    <figure>
      <img src="./ETH3D/tunnel_279_315_295_source.gif">
      <figcaption>Source images</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/tunnel_279_315_295_target.gif">
      <figcaption>Target image</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/tunnel_279_315_295_GLUNet.gif">
      <figcaption><b>GLU-Net (Ours)</b></figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/tunnel_279_315_295_PWCNet.gif">
      <figcaption>PWC-Net</figcaption>
    </figure>
    <figure>
      <img src="./ETH3D/tunnel_279_315_295_DGCNet.gif">
      <figcaption>DGC-Net </figcaption>
    </figure>
</div>

* #### Aligning images of the HPatches dataset (homography dataset)


<div class="flex-row">
    <figure>
      <img src="./HP/hp_14_source.gif">
      <figcaption>Source images</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_14_target.gif">
      <figcaption>Target image</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_14_GLUNet.gif">
      <figcaption><b>GLU-Net (Ours)</b></figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_14_PWCNet.gif">
      <figcaption>PWC-Net</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_14_DGCNet.gif">
      <figcaption>DGC-Net </figcaption>
    </figure>
</div>

<div class="flex-row">
    <figure>
      <img src="./HP/hp_5_source.gif">
      <figcaption>Source images</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_5_target.gif">
      <figcaption>Target image</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_5_GLUNet.gif">
      <figcaption><b>GLU-Net (Ours)</b></figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_5_PWCNet.gif">
      <figcaption>PWC-Net</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_5_DGCNet.gif">
      <figcaption>DGC-Net </figcaption>
    </figure>
</div>

<div class="flex-row">
    <figure>
      <img src="./HP/hp_7_source.gif">
      <figcaption>Source images</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_7_target.gif">
      <figcaption>Target image</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_7_GLUNet.gif">
      <figcaption><b>GLU-Net (Ours)</b></figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_7_PWCNet.gif">
      <figcaption>PWC-Net</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_7_DGCNet.gif">
      <figcaption>DGC-Net </figcaption>
    </figure>
</div>


<div class="flex-row">
    <figure>
      <img src="./HP/hp_15_source.gif">
      <figcaption>Source images</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_15_target.gif">
      <figcaption>Target image</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_15_GLUNet.gif">
      <figcaption><b>GLU-Net (Ours)</b></figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_15_PWCNet.gif">
      <figcaption>PWC-Net</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_15_DGCNet.gif">
      <figcaption>DGC-Net </figcaption>
    </figure>
</div>


<div class="flex-row">
    <figure>
      <img src="./HP/hp_58_source.gif">
      <figcaption>Source images</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_58_target.gif">
      <figcaption>Target image</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_58_GLUNet.gif">
      <figcaption><b>GLU-Net (Ours)</b></figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_58_PWCNet.gif">
      <figcaption>PWC-Net</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_58_DGCNet.gif">
      <figcaption>DGC-Net </figcaption>
    </figure>
</div>


<div class="flex-row">
    <figure>
      <img src="./HP/hp_51_source.gif">
      <figcaption>Source images</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_51_target.gif">
      <figcaption>Target image</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_51_GLUNet.gif">
      <figcaption><b>GLU-Net (Ours)</b></figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_51_PWCNet.gif">
      <figcaption>PWC-Net</figcaption>
    </figure>
    <figure>
      <img src="./HP/hp_51_DGCNet.gif">
      <figcaption>DGC-Net </figcaption>
    </figure>
</div>


* #### Aligning images of the semantic matching dataset TSS

<figure>
  <img src="./TSS-more.jpg">
</figure>


## How to cite:
```
@inproceedings{GLUNet_Truong_2020,
      title = {{GLU-Net}: Global-Local Universal Network for dense flow and correspondences},
      author    = {Prune Truong and
                   Martin Danelljan and
                   Radu Timofte},
      year = {2020},
      booktitle = {{IEEE} Conference on Computer Vision and Pattern Recognition, {CVPR} 2020}
}
```

