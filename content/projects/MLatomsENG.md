+++
date = '2026-04-12T23:28:50+02:00'
draft = false
title = 'Model Selection for Atomization Energy Prediction'
tags = ["Machine Learning", "Atomization energy", "energy-molecule", "Singular Value Decomposition", "features engineering", "Hyperparamaters"]
categories = ['Projects']
image='/images/projects/model_selection.png'
toc=false
+++

# Overview

In this work, I aim to span a various Machine Learning models; especially the regression ones. And the goal is to select the most promissing model that can predict in a smart fashion the Atomization energy of a given molecular structure. The Data can be found in the DataBase called GDB−13, also it is available under the name `roboBohr` as `csv` file format in kaggle's Dataset `energy-molecule`. The idea was a pivot of discussion in several works [[M. Rupp et al](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.108.058301) , [Lorenz C. Blum and J-L Reymond](https://pubs.acs.org/doi/10.1021/ja902302h) and lately [Burak Himmetoglu](https://pubs.aip.org/aip/jcp/article/145/13/134101/280927/Tree-based-machine-learning-framework-for)]. Moreover, the present notebook consist of learning about the suitable models that can be deployed; and to investigate how far I can achieve in term of performance. I will start as usual, by pre-processing the data (cleaning, droping `NAN` values ... etc), then I tackle very interesting section in data transformation fields mainly the so called Singular Value Decomposition (`SVD`). After that, I begin testing the models and norrowing the bands of these smart objects. The chosen models will undergo a testing performance according to various scores metrics. An adequate way for biasing the flow work is cited. A comparison between some strategies will be highlighted. After that, I try to tune the Hyperparamaters, and disscusse a features engineering attempt.

[**Read more:**](https://www.kaggle.com/code/delendaanouarakacha/model-selection-for-atomization-energy-prediction)  for further detailed read a well public explained notebook is available on [Kaggle](https://www.kaggle.com/code/delendaanouarakacha/model-selection-for-atomization-energy-prediction) platform.

[![Kaggle](https://img.shields.io/badge/Kaggle-Project-blue)](https://www.kaggle.com/code/delendaanouarakacha/model-selection-for-atomization-energy-prediction)