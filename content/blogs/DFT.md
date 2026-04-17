+++
date = '2026-04-13T00:32:05+02:00'
draft = false
title = 'Bottom-up synthesis of Density Functional Theory (DFT)'
author = 'Anouar Akacha Delenda'
categories= ["Blogs"]
tags = ["Density functional theory", "Kohn and Sham", "Schrödinger equation", "Born-Oppenheimer approximation", "Hartree-Fock equation", "electronic density", "wavefunction"]
weight = 1
+++

<a id="toppage"> </a>

# <center>Bottom-up synthesis of Density Functional Theory (DFT)</center></br> <p style="text-align:center;font-weight:normal;">From the Born-Oppenheimer approximation to the Kohn & Sham equation.

</br>
<details>
<summary> <b> Disclaimer</b>
</summary>

> The content of this article is based on various internet resources<b><sup>1</sup></b>. Furthermore, I have attempted to provide a simplified approach to the re-derivation of the equations. Therefore, there may be potential hiccups and mathematicals glichs in some simplifications. Here, I apologize in advance for any mistakes. However, I would welcome any corrections from you.<br>
>
> <b><sup>1</sup></b>:
> There was a Turkish website from Istanbul University with in-depth derivations, if I remember correctly. Unfortunately, I stupidly forgot to keep track of the URL. Thousand apologies for that 😅.

</details>
</br>

> </br>
>
> <a id="motivation"></a>💪 **Motivation**
>
> <div style="overflow:auto;margin:0 0 1em 0; max-width:80wv; height:auto; display:block;padding-bottom:2%">
>  <figure style="float:right; margin:0 0 1em 1em; max-width:200px; display:block;">
>    <img src="/images/blogs/DFT_BottomUP/Gerbrand_Ceder.png" style="width:100%; height:auto; display:block;">
>    <figcaption style="text-align:center;"> Gerbrand Ceder Pr @ University of California, Berkeley & <a href="https://vcresearch.berkeley.edu/faculty/gerbrand-ceder">Samsung Distinguished Chair in Nanoscience and Nanotechnology Research</a></figcaption>
>  </figure>
>  <p style="text-align:center;">“Today we know less than 1% of known compounds in the world; less than 1% of the materials properties.”</br>
> </br>
> Gerbrand Ceder @ The Material Desing Revolution <a href="https://www.youtube.com/watch?v=OE38aVAgOPM">the World Economic Forum (2014, Davoz)</a>.
> </p>
> <p align="center"><img src='/images/blogs/DFT_BottomUP/Ceder_qrcode.png' style="margin:0 0 1em 1em; width:80px; height:80px; display:block;"></p>
> </div>

# 1. Introduction

<a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

**Definition:**

A mathematical model about a sufficiently large set of natural phenomena is called an “**_ab initio model_** ” or a “**_first principles model_**” if the starting point of the model can not be further reduced to more fundamental concepts (at least not within the language of the considered natural phenomena).

<p align="right">By <b>Pr. Stefaan Cottenier</b> @ Ghent University. </p>

Furhtermore, the main idea is to tame the following beast:

\[
\begin{equation}
\hat{\mathcal{H}}\Psi = E\Psi
\end{equation}
\]

Where the Hamiltonian is given in **atomic unit** for \(N_e\) electrons and \(N_n\) nucleus as following:

\[
\begin{equation}
\mathcal{H} = -\sum_i^{N_e} \frac{\nabla^2_{\overrightarrow{r_i}}}{2m_i}-\sum_i^{N_n} \frac{\nabla^2{\overrightarrow{R_i}}}{2M_i} + \frac{1}{2}\sum_{i =1}^{N_e}\sum_{i\neq j}^{N_e} \frac{1}{|\overrightarrow{r_i}-\overrightarrow{r_j}|}+ \frac{1}{2}\sum_{i =1}^{N_n}\sum_{i\neq j}^{N_n} \frac{Z_iZ_j}{|\overrightarrow{R_i}-\overrightarrow{R_j}|} - \frac{1}{2}\sum_{i =1}^{N_e}\sum_{j = 1}^{N_n} \frac{Z_j}{|\overrightarrow{r_i}-\overrightarrow{R_j}|}
\end{equation}
\]

The right-hand side of \((2)\) are respectively: **electron** and **nucleus** _kinetic energy_, **electron-electron** and **nuclei-nuclie** _Coulomb interaction_ and the **electron-nuclie** _Coulomb interaction_.

# 2. How to tame Schrödinger equation ?

<a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

## 2.1 Born-Oppenheimer approximation

The basic idea is the following: ”_We consider the nuclei as stationary objects, so we freeze the nuclear positions._”. We say that this approximation is **adiabatic** (We move from \(4(Ne + Nn) \longrightarrow 4Ne\)).

\[
\begin{equation}\Psi(\overrightarrow{r_i},\overrightarrow{\sigma_i},\overrightarrow{R_i},\overrightarrow{\sigma_i^N}) \longrightarrow \Psi(\overrightarrow{r_1},\overrightarrow{\sigma_1},\dots , \overrightarrow{r_{N_e}},\overrightarrow{\sigma_{N_e}}; \underbrace{\left[\overrightarrow{R_1}, \dots , \overrightarrow{R_{N}}\right]}\_{Paramaters})\end{equation}
\]

The previous wavefunction should be **_anti-symmetric_**. The problem is reduced into solving the Schrödinger equation for the following Hamiltonian:

\[
\begin{equation}\mathcal{H} = -\sum_i^{N_e}\frac{\nabla_{r_i}^2}{m_i} - \sum_{\{i,j\}\longrightarrow \{N_e, N_n\}}\frac{Z_j}{|\overrightarrow{R_j}-\overrightarrow{r_i}|} + \frac{1}{2}\sum_{i}^{N_e}\sum_{i\neq j}^{N_e}\frac{1}{|\overrightarrow{r_j}-\overrightarrow{r_i}|} + \underbrace{\frac{1}{2}\sum_{i}^{N_n}\sum_{i\neq j}^{N_n}\frac{Z_jZ_i}{|\overrightarrow{R_j}-\overrightarrow{R_i}|}}*{Constant}\end{equation}
\]

> </br>
>
> ℹ️ **Note:** that \(\textbf{BO}\)-approximation is a major simplification, but it is **way too hard to solve!** more work is needed.</br> 

## 2.2 Hartree-Fock method (post-HF method)

<a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

> </br>
>
> 💡 **_The main idea:_** </br>
> For all the possible sets of the wavefunctions that can describe our system, we search for the one associated to the ground state.
> With the following restrictions:</br>
>
> - Just the anti-symmetric wavefunctions;
>
> - Use Salter determinant;
>
> - The energy minimization principal.
>
> ⚠️ At the end this is an approximation (work well for chemistry topics, not for solids).</br> ></br>

The first step is visualizing the terms in the reduced Schrödinger equation after \(\textbf{BO}\) approximation. After all, we end up with:

\[
\begin{equation}
\mathcal{H} = \sum_i^{N_e}\underbrace{\left[-\frac{\nabla_{r_i}^2}{m_i} - \sum_j^{N_n}\frac{Z_j}{|\overrightarrow{R_j}-\overrightarrow{r_i}|} \right]}_{\hat{h}_1(\overrightarrow{r_i})\equiv\ single-particle } + \frac{1}{2}\sum_{i}^{N_e}\underbrace{\sum_{i\neq j}^{N_e}\frac{1}{|\overrightarrow{r_j}-\overrightarrow{r_i}|} }_{\hat{h}\_2(r_i,r_j)\equiv\ effective\ potential}
\end{equation}
\]

Notice that we omitted the constant term, the reason will be more obvious in the following derivations. The Hartree-Fock method is a variational, wavefunction-based approach. Although it is a many-body technique, the approach followed is that of a single-particle picture, i.e. the electrons are considered as occupying single-particle orbitals making up the wavefunction. Each electron feels the presence of the other electrons indirectly through an effective potential. Each orbital, thus, is affected by the presence of electrons in other orbitals. Now to build our wavefunction, instinctively we write our function as the product of the orbitals occupied by the electrons, and for simplicity we drop the spin degrees of freedom:

\[
\begin{equation}
\Psi(r_1,\dots,r_n) = \varphi_1(r_1)\times \dots\times \varphi_N(r_N)
\end{equation}
\]

❗ **But wait**, this expression **violate** the first restriction mentioned above ! We need another tools that respect the anti-symmetric feature of the wavefunction.

## 2.2.1 Slater expression

<a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

One way to overcome the raised problem is the so called \(Slater\) determinant:

\[
\begin{equation}
\Psi(r_1,\dots,r_n) = \frac{1}{\sqrt{N_e!}}\begin{pmatrix}
\varphi_1(r_1) & \dots & \varphi_N(r_1)\\
\vdots & \vdots & \vdots \\
\varphi_1(r_N) & \dots & \varphi_N(r_N)
\end{pmatrix}
\end{equation}
\]

Now, we will try to write more compact formula for our wavefuction:

\[
\begin{equation*}
\Psi(\{\overrightarrow{r}\}) = \frac{1}{\sqrt{N_e!}} \sum_i^{N_e} (-1)^{P(i)}\varphi_{i_1}(r_1)\dots \varphi_{i_N}(r_N)
\end{equation*}
\]

<aside>
🗣 The notation here is ambiguous, and not obvious! By far, the \((-1)^{P(i)}\) factor result from the expansion of the determinant. For which it is <b>+1</b> if we have a term with an even permutation (e.g: \(3\longrightarrow 1 \longrightarrow 2\)) or <b>-1</b> for an odd permutation (e.g: \(3\longrightarrow 2 \longrightarrow 1\)).

</aside>

## 2.2.2 Energy minimization

<a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

As the \(\textbf{HF}\) method relies on a variational principal:
\[
\begin{equation}
\bra{\Psi}\mathcal{H}_{HF}\ket{\Psi} = \bra{\Psi}\sum_i\hat{h}_1(r_i)\ket{\Psi} +\frac{1}{2}\bra{\Psi}\sum_{i\neq j}\hat{h}_{2}(r_i,r_j)\ket{\Psi}
\end{equation}
\]

We start by evaluating the expected value of the single particle (first term on the right side ):

\[
\begin{align*}
\bra{\Psi}\sum_n\hat{h}_1(r_n)\ket{\Psi} =& \frac{1}{N!}\sum_n^{N}\sum_j^{N!}\sum_i^{N!} (-1)^{P(j)}(-1)^{P(i)}\times\\
&\langle\varphi_{j_1}(r_1)\dots \varphi_{j_N}(r_N)|\hat{h}_1(r_n)|\varphi_{i_1}(r_1)\dots \varphi_{i_N}(r_N)\rangle
\end{align*}
\]

The trick that works with me is to write down \(\textcolor{green}{first}\) the orbitals that the Hamiltonian is mainly! applied on. Then we write the remaining terms as single \(bra-ket\) products :

\[
\begin{align*}
\bra{\Psi}\sum_n\hat{h}_1(r_n)\ket{\Psi} =& \frac{1}{N!}\sum_n^{N}\sum_j^{N!}\sum_i^{N!} (-1)^{P(j)}(-1)^{P(i)}\times\\
& \langle\varphi_{1_j}(r_j)|\varphi_{1_i}(r_i)\rangle\times \dots\\
& \times \textcolor{green}{\langle\varphi_{j_n}(r_n)|\hat{h}_1(r_n)|\varphi_{i_n}(r_n)\rangle}\times \dots \\
& \times \langle\varphi_{N_j}(r_N)|\varphi_{i_N}(r_N)\rangle
\end{align*}
\]

With the \(anzats\): \(\langle\varphi_j|\varphi_i\rangle=\delta_{ij}\)

\[
\begin{align*}
\bra{\Psi}\sum_n\hat{h}_1(r_n)\ket{\Psi} =& \frac{1}{N!}\sum_n^{N}\sum_j^{N!}\sum_i^{N!} (-1)^{P(j)}(-1)^{P(i)}\times\\
& \delta_{1_j1_i}\times \dots\times\langle\varphi_{j_n}(r_n)|\hat{h}_1(r_n)|\varphi_{i_n}(r_n)\rangle\times \dots \times \delta_{N_jN_i}
\end{align*}
\]

Since we end up with one sum(\(i=j\)) \(N!\) times over all the orbitals, we have always the same \(+\) sign in front of the product:

\[
\begin{align*}
\bra{\Psi}\sum_n\hat{h}_1(r_n)\ket{\Psi} =\frac{1}{N!}\sum_n^{N} \sum_i^{N!}\langle\varphi_{i_n}(r_i)|\hat{h}_1(r_n)|\varphi_{i_n}(r_i)\rangle
\end{align*}
\]

In conclusion the first term in \(\textbf{HF}\) energy is the expected total energy of all the single particles treated individually.

\[
\begin{equation*}
\bra{\Psi}\sum_i\hat{h}_1(r_i)\ket{\Psi} =\sum_i^{N} \langle\varphi_{i}(r_i)|\hat{h}_1(r_i)|\varphi_{i}(r_i)\rangle
\end{equation*}
\]

Let's tackle the second terms:

\[
\begin{align*}
\bra{\Psi}\sum_{n\neq m}\hat{h}_{2}(r_n,r_m)\ket{\Psi} =& \frac{1}{N!}\sum_{n\neq m}\sum_j^{N!}\sum_i^{N!} (-1)^{P(j)}(-1)^{P(i)}\times\\
&\langle\varphi_{j_1}(r_1)\dots \varphi_{j_N}(r_N)|\hat{h}_2(r_n, r_m)|\varphi_{i_1}(r_1)\dots \varphi_{i_N}(r_N)\rangle
\end{align*}
\]

We use the same tricks as before:

\[
\begin{align*}
\bra{\Psi}\sum_{n\neq m}\hat{h}_{2}(r_n,r_m)\ket{\Psi} =& \frac{1}{N!}\sum_{n\neq m}\sum_j^{N!}\sum_i^{N!} (-1)^{P(j)}(-1)^{P(i)}\times\\
& \delta_{1_j1_i}\times \dots \times \textcolor{green}{\langle\varphi_{j_n}(r_n)\varphi_{j_m}(r_m)|\hat{h}_2(r_n, r_m)|\varphi_{i_n}(r_n)\varphi_{i_m}(r_m)\rangle}\\
&\times \dots \times \delta_{N_jN_i}
\end{align*}
\]

Which is reduced into ( Notice the order \(n < m\).):

\[
\begin{align*}
\bra{\Psi}\sum_{n< m}\hat{h}_{2}(r_n,r_m)\ket{\Psi} =& \frac{1}{N!}\sum_{n< m}\sum_i^{N!}(-1)^{P(i)}\langle\varphi_{i_n}(r_n)\varphi_{i_m}(r_m)|\hat{h}_2(r_n, r_m)|\varphi_{i_n}(r_n)\varphi_{i_m}(r_m)\rangle
\end{align*}
\]

Here we have one permutation operators \(P\) acting on the order of the set of orbitals \(\{1, 2, \dots, n, \dots, m, \dots, N\}\). It is not obvious, but clearly we are expecting something to pop-up for sure! And the idea is to separate all the \(even\) and the \(odd\) permutations in the previous set:

\[
    \begin{align*}
    \bra{\Psi}\sum_{n< m}\hat{h}_{2}(r_n,r_m)\ket{\Psi} =& \frac{1}{N!}\sum_{n< m}\sum_i^{N!}\\
    &\langle\varphi_{i_n}(r_n)\varphi_{i_m}(r_m)|\hat{h}_2(r_n, r_m)|\varphi_{i_n}(r_n)\varphi_{i_m}(r_m)\rangle \\
    &- \langle\varphi_{i_m}(r_n)\varphi_{i_n}(r_m)|\hat{h}_2(r_n, r_m)|\varphi_{i_m}(r_n)\varphi_{i_n}(r_m)\rangle
    \end{align*}
\]

For both \(even\) or \(odd\) terms we have \(N!\) times repeated quantities. Hence we find:

\[
\begin{align*}
\bra{\Psi}\sum_{n< m}\hat{h}_{2}(r_n,r_m)\ket{\Psi} =& \sum_{n< m}^N\langle\varphi_{n}(r_n)\varphi_{m}(r_m)|\hat{h}_2(r_n, r_m)|\varphi_{n}(r_n)\varphi_{m}(r_m)\rangle \\
&- \langle\varphi_{m}(r_n)\varphi_{n}(r_m)|\hat{h}_2(r_n, r_m)|\varphi_{m}(r_n)\varphi_{n}(r_m)\rangle
\end{align*}
\]

At the end we get the following expression for our many-body problem:

\[
\begin{equation}
E_{HF} = \sum_{i}^{N}\bra{\varphi_i}\hat{h}_1\ket{\varphi_i} + \frac{1}{2}\sum_{i}^{N}\sum_{j}^{N}\left[\bra{\varphi_i\varphi_j}\hat{h}_2\ket{\varphi_i\varphi_j}-\bra{\varphi_j\varphi_i}\hat{h}_2\ket{\varphi_i\varphi_j}\right]
\end{equation}
\]

## 2.2.3 Hartree-Fock equation

<a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

In this section we will apply the variational principale on the last equation and the aim is to minimize the total energy:

\[
\begin{equation}
\delta E\_{HF} = 0
\end{equation}
\]

We use the Lagrange multipliers and the orthogonality of the set of our wvefunctions basis as following:

\[
\begin{gather}
\delta \left[ E_{HF} +\sum_{i,j}\left(-\lambda_{i,j} +\lambda_{i,j}\right) \right] = 0 \\
\delta \left[ E_{HF} -\sum_{i,j}\lambda_{i,j} \left(\bra{\varphi_i}\ket{\varphi_j}+\delta_{i,j}\right) \right] = 0\\
\delta F = 0
\end{gather}
\]

The \(F\) stand for \(Fock\) operator in the last equation. Now we will consider small change in our wavefunction basis (\(\varphi \longrightarrow \varphi + \delta \varphi\)). We first treat the the term with the \(Langrange\) multipliers:

\[
\begin{gather*}
\delta \left[\sum_{i,j}\lambda_{i,j} \left(\bra{\varphi_i}\ket{\varphi_j}+\delta_{i,j}\right) \right] = \sum_{i,j}\lambda_{i,j} \left[\bra{\delta\varphi_i}\ket{\varphi_j}+\bra{\varphi_i}\ket{\delta\varphi_j} \right]
\end{gather*}
\]

We can write the second term as:

\[
\begin{gather*}
\bra{\varphi_i}\ket{\delta\varphi_j} =\underset{\mathbb{R}^2}{\int} \varphi_i^*(r_i)\delta\varphi_i(r_i) dr^2 = \left[\underset{\mathbb{R}^2}{\int} \varphi_i(r_i)\delta\varphi_i^*(r_i) dr^2\right]^*=\bra{\delta\varphi_i}\ket{\varphi_j}^*
\end{gather*}
\]

We move forward to differentiate the single electrons expectation value:

\[
\begin{gather*}
\delta\left[\sum_i^N\bra{\varphi}\hat{h}_1\ket{\varphi_i}\right] = \sum_i^N\left[\bra{\delta\varphi}\hat{h}_1\ket{\varphi_i} + \bra{\varphi}\hat{h}_1\ket{\delta\varphi_i}\right]
\end{gather*}
\]

Since \(\hat{h}_1\) is hermitian operator i.e \(\left(\hat{h}_1\right)^{\dagger}=\hat{h}_1\):

\[
\begin{equation*}
\delta\left[\sum_i^N\bra{\varphi_i}\hat{h}_1\ket{\varphi_i}\right] = \sum_i^N\left[\bra{\delta\varphi}\hat{h}_1\ket{\varphi_i} + C.C\right]
\end{equation*}
\]

Where \(C.C\) stand for \(Complex\ Conjugate\). Then we work with second term of \(Hartree-Fock\) energy (\(E\_{HF}\)), step by step we will start by the electrons coulomb interaction:

\[
\begin{gather*}
\delta\left[ \sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_i\varphi_j}\hat{h}_2\ket{\varphi_i\varphi_j}\right] = \delta\left[\sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_{i}(r_i)\varphi_{j}(r_j)}\hat{h}_2\ket{\varphi_{i}(r_i)\varphi_{j}(r_j)}\right] \\
    + \textcolor{green}{\sum_{i}^{N}\sum_{j}^{N}\bra{\delta\varphi_{i}(r_i)\varphi_{j}(r_j)}\hat{h}_2\ket{\varphi_{i}(r_i)\varphi_{j}(r_j)}} \\
    +  \textcolor{orange}{\sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_{i}(r_i)\delta\varphi_{j}(r_j)}\hat{h}_2\ket{\varphi_{i}(r_i)\varphi_{j}(r_j)}} \\
    + \textcolor{green}{\sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_{i}(r_i)\varphi_{j}(r_j)}\hat{h}_2\ket{\delta\varphi_{i}(r_i)\varphi_{j}(r_j)}} \\
    + \textcolor{orange}{\sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_{i}(r_i)\varphi_{j}(r_j)}\hat{h}_2\ket{\varphi_{i}(r_i)\delta\varphi_{j}(r_j)}}
\end{gather*}
\]

We notice that we have \(C.C\) that pop-up automatically as in the previous treatment:

\[
\begin{equation*}
\delta\left[ \sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_i\varphi_j}\hat{h}_2\ket{\varphi_i\varphi_j}\right] = \sum_{i}^{N}\sum_{j}^{N}\left[\bra{\delta\varphi_i\varphi_j}\hat{h}_2\ket{\varphi_i\varphi_j} + \bra{\varphi_i\delta\varphi_j}\hat{h}_2\ket{\varphi_i\varphi_j} + C.C \right]
\end{equation*}
\]

After this we are arrive to the exchange term, and with the same treatment:

\[
\begin{align*}
\delta\left[ \sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_j\varphi_i}\hat{h}_2\ket{\varphi_i\varphi_j}\right] &= \delta\left[\sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_{i}(r_j)\varphi_{j}(r_i)}\hat{h}_2(r_i, r_j)\ket{\varphi_{j}(r_i)\varphi_{i}(r_j)}\right] \\
    &=  \sum_{i}^{N}\sum_{j}^{N} \textcolor{green}{\bra{\delta\varphi_{i}(r_j)\varphi_{j}(r_i)}\hat{h}_2(r_i, r_j)\ket{\varphi_{j}(r_i)\varphi_{i}(r_j)} }\\
    & + \sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_{i}(r_j)\delta\varphi_{j}(r_i)}\hat{h}_2(r_i, r_j)\ket{\varphi_{j}(r_i)\varphi_{i}(r_j)} \\
    & + \sum_{i}^{N}\sum_{j}^{N}\textcolor{green}{\bra{\varphi_{i}(r_j)\varphi_{j}(r_i)}\hat{h}_2(r_i, r_j)\ket{\delta\varphi_{j}(r_i)\varphi_{i}(r_j)} }\\
    & + \sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_{i}(r_j)\varphi_{j}(r_i)}\hat{h}_2(r_i, r_j)\ket{\varphi_{j}(r_i)\delta\varphi_{i}(r_j)}
\end{align*}
\]

I highlighted the corresponding lines to show the trick!

\[
\begin{align*}
    \bra{\delta\varphi_{i}(r_j)\varphi_{j}(r_i)}\hat{h}_2(r_i, r_j)\ket{\varphi_{j}(r_i)\varphi_{i}(r_j)} &=\underset{\mathbb{R}^{6N}}{\int} \delta\varphi_{i}^*(r_j)\varphi_{j}^*(r_i)\hat{h}_2(r_i, r_j)\varphi_{j}(r_i)\varphi_{i}(r_j) dr_idr_j \\
    &=  \left[\underset{\mathbb{R}^{6N}}{\int} \delta\varphi_{i}(r_j)\varphi_{j}(r_i)\hat{h}_2(r_i, r_j)\varphi_{j}^*(r_i)\varphi_{i}^*(r_j) dr_idr_j \right]^* \\
    &=  \left[\underset{\mathbb{R}^{6N}}{\int} \varphi_{j}^*(r_i)\varphi_{i}^*(r_j)\hat{h}_2(r_i, r_j) \delta\varphi_{i}(r_j)\varphi_{j}(r_i) dr_idr_j \right]^*
\end{align*}
\]

Since \(\{r_i;r_j\}\) are \(dummy\) variables, the integral value doesn't change if we swap the indices. Also, the operator \(\hat{h}_2\) is invariant by changing the order (\(\hat{h}_2\) represent a coulomb interaction ):

\[
\begin{align*}
    \underset{\mathbb{R}^{6N}}{\int} \varphi_{j}^*(r_i)\varphi_{i}^*(r_j)\hat{h}_2(r_i, r_j) \delta\varphi_{i}(r_j)\varphi_{j}(r_i) dr_idr_j &= \underset{\mathbb{R}^{6N}}{\int} \varphi_{i}^*(r_j)\varphi_{j}^*(r_i)\underbrace{\hat{h}_2(r_j, r_i)}_{\equiv\ \hat{h}_2(r_i,r_j)} \delta\varphi_{j}(r_i)\varphi_{i}(r_j) dr_idr_j\\
    &= \bra{\varphi_{i}(r_j)\varphi_{j}(r_i)}\hat{h}_2(r_i,r_j)\ket{\delta\varphi_{j}(r_i)\varphi_{i}(r_j)}
\end{align*}
\]

Hence, we can write in more condensed way as before:

\[
\begin{align*}
\delta\left[ \sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_i\varphi_j}\hat{h}_2\ket{\varphi_j\varphi_i}\right] &= \sum*{i}^{N}\sum*{j}^{N} \bra{\delta\varphi*{i}(r_j)\varphi*{j}(r*i)}\hat{h}\_2(r_i, r_j)\ket{\varphi*{j}(r*i)\varphi*{i}(r*j)}\\ &+ \sum*{i}^{N}\sum*{j}^{N} \bra{\varphi*{i}(r*j)\delta\varphi*{j}(r*i)}\hat{h}\_2(r_i, r_j)\ket{\varphi*{j}(r*i)\varphi*{i}(r_j)} \\
&+ C.C
\end{align*}
\]

Now we will omit the notation \(\varphi_i(r_j)\) :

\[
\begin{equation*}
\delta\left[ \sum_{i}^{N}\sum_{j}^{N}\bra{\varphi_i\varphi_j}\hat{h}_2\ket{\varphi_j\varphi_i}\right] =\sum*{i}^{N}\sum*{j}^{N} \left[ \bra{\delta\varphi_i\varphi_j}\hat{h}_2\ket{\varphi_j\varphi_i} + \bra{\varphi_i\delta\varphi_j}\hat{h}_2\ket{\varphi_j\varphi_i} + C.C \right]
\end{equation*}
\]

We are almost there! Lets write all the terms:

\[
\begin{align*}
    \delta F &= \sum_i^N\Big[ \bra{\delta\varphi_i}\hat{h}_1\ket{\varphi_i} \\ 
    &+ \textcolor{green}{\frac{1}{2}} \sum_{j}^{N}\big[ \bra{\delta\varphi_i\varphi_j}\hat{h}_2\ket{\varphi_i\varphi_j} + \bra{\varphi_i\delta\varphi_j}\hat{h}_2\ket{\varphi_i\varphi_j}\\    
    &- \bra{\delta\varphi_i\varphi_j}\hat{h}_2\ket{\varphi_j\varphi_i} - \bra{\varphi_i\delta\varphi_j}\hat{h}_2\ket{\varphi_j\varphi_i} \big]\\
    &- \sum_j^N \lambda_{i,j}\langle{\delta\varphi_i}|\varphi_j\rangle \Big]\\
    &+ C.C 
\end{align*}
\]

It is not obvious, and the following argument that I rise here may be naive! but the factor of half disappear. Why? We can justify it by the interchanging the indices \(i\ \&\ j\) order, or we say at some point of the summation; the states are reached twice! At this point, it is more proper and urgent! to write the last equation in its integral form:

\[
\begin{align*}
    \delta F &= \sum_i^N \Big\{ \underset{\mathbb{R}^{6N}}{\int} \delta \varphi^*_i(r_i)\hat{h}_1(r_i)\varphi_i(r_i)dr_i^2\\
    &+ \sum_j^N  \Big[\underset{\mathbb{R}^{6N}}{\int} \delta \varphi^*_i(r_i)\varphi^*_j(r_j)\hat{h}_2(r_i,r_j)\varphi_i(r_i)\varphi_j(r_j)dr_idr_j  \\
    &- \underset{\mathbb{R}^{6N}}{\int} \delta \varphi^*_i(r_j)\varphi^*_j(r_i)\hat{h}_2(r_i,r_j)\varphi_j(r_i)\varphi_i(r_j)dr_idr_j \Big] \\
    &- \sum_j^N \lambda_{i,j}\underset{\mathbb{R}^{6N}}{\int}\delta \varphi^*_i(r_i)\varphi_j(r_j)dr_idr_j \Big\}\\
    & + C.C 
\end{align*}
\]

Now we have our final \(action\) expression (\(F\)) of our system, we take the derivative of \(F\) with respect to some \(k^{th}\) bra (\(\bra{\delta\varphi_k} \equiv \varphi^*_k\)). Notice that \(\frac{\delta C.C}{\delta\varphi} = 0\) (the reason for choosing the \(bra\) over the \(ket\) will be obvious at the end!).

\[
\begin{align*}
    \frac{\delta F}{\delta \varphi_k^*} &=  \underset{\mathbb{R}^{3N}}{\int} \hat{h}_1(r_k)\varphi_k(r_k)dr_k\\
    &+ \sum_j^N  \Big[\underset{\mathbb{R}^{6N}}{\int} \varphi^*_j(r_j)\hat{h}_2(r_k,r_j)\varphi_k(r_k)\varphi_j(r_j)dr_kdr_j  \\
    &- \underset{\mathbb{R}^{6N}}{\int} \varphi^*_j(r_k)\hat{h}_2(r_k,r_j)\varphi_j(r_k)\varphi_k(r_j)dr_kdr_j \Big] \\
    &- \sum_j^N \lambda_{j}\underset{\mathbb{R}^{3N}}{\int}\varphi_j(r_j)dr_j 
\end{align*}
\]

The idea of factoring the \(ket\) is just to re-write our expression in Schrodinger-like form, and it's not rigorous from the mathematical point of view! Hence, Factoring out the \(\ket{\varphi_k}\) gives:

\[
\begin{gather*}
     \underset{\mathcal{R}^{3N}}{\int} \Big\{ \hat{h}_1(r_k) + \sum_j^N  \Big[\underset{\mathcal{R}^{3N}}{\int} \varphi^*_j(r_j)\hat{h}_2(r_i,r_j)\varphi_j(r_j)dr_j - \underset{\mathbb{R}^{3N}}{\int} \varphi^*_j(r_i)\hat{h}_2(r_i,r_j)\varphi_k(r_j)dr_j \Big] \Big\}\varphi_k(r_k)dr_k= \\
    = \underset{\mathcal{R}^{3N}}{\int}\sum_j^N \lambda_{j}\varphi_j(r_j)dr_j = \underset{\mathcal{R}^{3N}}{\int}\sum_j^N \lambda_{k}\varphi_k(r_k)dr_k 
\end{gather*}
\]

Now we can go back to \(bra-ket\) notation without confusion:

\[
\begin{equation*}
    \Big[\hat{h}_1 + \sum_{j}^{N}( \hat{J}_j - \hat{K}_j )\Big]\ket{\varphi_k}= \sum_k^N \lambda_{k}\ket{\varphi_k}
\end{equation*}
\]

This is the why we choose \(bra\) over \(ket\), to end-up with system of Schrodinger-like equations! for which \(\hat{J}_i\) is an integral operator stand for the classical interaction of an electron distributions given by \(|\varphi_j|^2\) and is called the \textbf{direct term}. While \(\hat{K}_j\) called the \textbf{exchange operator}, has no classical analogue and it is a direct result of the $antisymmetry$ property of the wavefunction. The Fock operator is given by:

\[
\begin{equation}
\hat{F} = \hat{h}_1 + \sum_{j}^{N}( \hat{J}_j - \hat{K}_j )
\end{equation}
\]

The problem is reduced into finding the eigenvalues of the following set of equations:

\[
\begin{equation}
\hat{F}\ket{\varphi_k}=\varepsilon_k\ket{\varphi_k}
\end{equation}
\]

For which the solutions \(\varepsilon_k\) hold the new identity of the Lagrange multipliers.

<aside>
🗣 Although it’s tempting to interpret the eigenvalues as the energy levels of an \(\textbf{interacting system}\), this is in fact \(\underline{not\ justified}\)  because the single-electron picture is \(\textbf{not correct}\). However, if interpreted correctly the \(\textbf{Hartree-Fock}\) eigenvalues do correspond to certain physical entities. 
For instance, there exist \(\textbf{Koopman’s theorem}\), stating that each eigenvalue of the \(\textbf{Fock}\) operator gives the energy required to remove an electron from the corresponding single-electron state. And, similarly the energy required to add an electron to orbital "\(n\)" can be proven to be given by \(+\ \varepsilon_n\).
</aside>

## 2.2.4 KOOPMAN'S THEOREM & The Ionization energy

<a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

In this section we use \(Koopman's\ theorem\) to give an insight interpretation to the eigenenergies \(\varepsilon_k$ we find in the previous equation. We will consider two system with \((N-1)\) and \(N\) electrons respectively. For which the system of \(N-1\) electron is missing one electron on some orbital "\(n\)". Also, beside omitting the spin orbitals degrees of freedom, we postulate that the orbitals are unchanged during this process.
We start by writing the \(HF\) energy of both system:

\[
\begin{gather*}
    E_{HF}^{N-1} = \sum_{k\neq n}^N \bra{\varphi_k}\hat{h}_1\ket{\varphi_k} + \frac{1}{2} \sum_{k \neq n}^{N}\sum_{j \neq n}^{N} \Big[\bra{\varphi_k\varphi_j}\hat{h}_2\ket{\varphi_k\varphi_j} - \bra{\varphi_k\varphi_j}\hat{h}_2\ket{\varphi_j\varphi_k}\Big] \\
    E_{HF}^{N} = \sum_{k}^N \bra{\varphi_k}\hat{h}_1\ket{\varphi_k} + \frac{1}{2} \sum_{k }^{N}\sum_{j}^{N} \Big[\bra{\varphi_k\varphi_j}\hat{h}_2\ket{\varphi_k\varphi_j} - \bra{\varphi_k\varphi_j}\hat{h}_2\ket{\varphi_j\varphi_k}\Big] 
\end{gather*}
\]

Notice that for first line we do not have the "n" orbital in our sum. Now, we evaluate the difference \(E_{HF}^{N-1}-E_{HF}^{N}\) term by term through the full expansion of both summations:

\[
\begin{align*}
    \Delta E_{HF} &= -\bra{\varphi_n}\hat{h}_1\ket{\varphi_n} \\
    &-\frac{1}{2}\sum_{j}^{N}\Big[ \bra{\varphi_n\varphi_j}\hat{h}_2\ket{\varphi_n\varphi_j} - \bra{\varphi_n\varphi_j}\hat{h}_2\ket{\varphi_j\varphi_n} \Big]\\
    &- \frac{1}{2}\sum_{k}^{N}\Big[ \bra{\varphi_k\varphi_n}\hat{h}_2\ket{\varphi_k\varphi_n} - \bra{\varphi_k\varphi_n}\hat{h}_2\ket{\varphi_n\varphi_k} \Big]
\end{align*}
\]

Since the indices \(k\) and \(j\) are irrelevant (\(k\equiv j\)), and by make use of the identity \(\bra{f_1f_2}\hat{A}\ket{f_3f_4} = \bra{f_2f_1}\hat{A}\ket{f_4f_3}\), we get:

\[
\begin{gather*}
    \Delta E_{HF} = - \bra{\varphi_n}\hat{h}_1\ket{\varphi_n} -  \sum_{j}^{N} \Big[ \bra{\varphi_j\varphi_n}\hat{h}_2\ket{\varphi_j\varphi_n} - \bra{\varphi_j\varphi_n}\hat{h}_2\ket{\varphi_n\varphi_j}\Big]
\end{gather*}
\]

The last equation is nothing less that the negative eigenenergy of the \(\textbf{Fock}\) operator on the orbital "n":

\[
\begin{gather*} - \bra{\varphi_n}\hat{F}\ket{\varphi_n} = - \varepsilon_n
\end{gather*}
\]

<aside>
🗣 \(\textbf{Koopmans’ theorem}\), states that each eigenvalue of the \(\textbf{Fock}\) operator gives the energy required to remove an electron from the corresponding single-electron state. And, similarly the energy required to add an electron to orbital "n" can be proven to be given by \(+\ \varepsilon_n\).
</aside>

## 2.2.5 Hartree-Fock-Roothaan <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

One of the attempt to solve the \(\textbf{HF}\) equation was done in 1951 by \(\textbf{Roothaan}\). Clemens C. J. Roothaan was a Dutch physicist and chemist known for his development of the self-consistent field theory of molecular structure<sup>2</sup>. For a quick read brows the [Roothaan equation](https://en.wikipedia.org/wiki/Roothaan_equations).

<sup><b>2</b></sup>: [Wikipedia-Bibliography](https://en.wikipedia.org/wiki/Clemens_C._J._Roothaan)

# 3 The many-body Problem as electron density dependence <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

In this section we will rewrite the Hamiltonian as function of the electron density. Again we will treat the Hamiltonian as a spin-less problem. This is the core idea behind density dunctional theory where the function we are interested in take another function and return an output a.k.a number (\(f \longrightarrow I[f]\)).

<center><img src="/images/blogs/DFT_BottomUP/functional_illustration.png"></center>

But first we need to write the later entity \(n(r)\). So to start we define \(n(r_1)\) the electron density of finding an electron at position \(r_1\) while the rest of electrons set are at positions \(\{r_2,r_3, \dots, r_N\}\) as following:

\[
\begin{gather}
\hat{n}(r_1) = \delta (r-r_1) \\
n(r_1) = \bra{\Psi(r_1, r_2, \dots, r_N)}\hat{n(r_1)}\ket{\Psi(r_1, r_2, \dots, r_N)} \\
n(r_1) = \underset{\mathbb{R}^3}{\int} \dots \underset{\mathbb{R}_N^3}{\int} \Psi^*(r_1, r_2, \dots, r_N) \delta (r-r_1) \Psi(r_1, r_2, \dots, r_N) dr_1dr_2\dots dr_N
\end{gather}
\]

First thing to notice is that we can write the product of the \(bra-ket\) function as the norm squared \(|\Psi(r_1, r_2, \dots, r_N)|^2\) (the operator \(\hat{n}(r_1)\) does not acts on the wavefunction) which yields:

\[
\begin{gather*}
    n(r_1) = \underset{\mathbb{R}_N^3}{\int} \dots \underbrace{\Big(\underset{\mathbb{R}^3}{\int} \delta (r-r_1) |\Psi(r_1, r_2, \dots, r_N)|^2 dr_1\Big)}_{}dr_2\dots dr_N\\
    n(r_1) = \underset{\mathbb{R}_2^3}{\int}\dots\underset{\mathbb{R}_N^3}{\int} |\Psi(r, r_2, \dots, r_N)|^2 dr_2\dots dr_N
\end{gather*}
\]

By following the same reasoning the electron density of many-body system \(n(r)\) is given by the sum of all individual electrons densities(the definition \(n(r)= \sum_i^N n(r_i)\), is justified by seeing the operator of \(\hat{n}(r)\) as a linear one):

\[
\begin{gather*}
n(r)= \underset{\mathbb{R}^{3(N-1)}}{\int} |\Psi(r, r_2, \dots, r_N)|^2 dr_2\dots dr_N + \underset{\mathbb{R}^{3(N-1)}}{\int} |\Psi(r_1, r, \dots, r_N)|^2 dr_1dr_3\dots dr_N + \dots
\end{gather*}
\]

Since the propriety of the Norm squared of the wavefunction does not change with its arguments shuffled(\(|\Psi(r_1, \dots r_i,r_j,\dots, r_N)|^2 = |\Psi(r_1, \dots r_j,r_i,\dots, r_N)|^2\)). It is obvious that we end-up having \(N\) equal terms, because of the indistinguishable nature of electrons:

\[
\begin{gather}
n(r)= N \underset{\mathbb{R}^{3(N-1)}}{\int} |\Psi(r, r_2, \dots, r_N)|^2 dr_2\dots dr_N
\end{gather}
\]

If we integrate the last equation over the remaining spaces we get the electrons number(here we consider a normalized wavefunction):

\[
\begin{equation}
N = \int drn(r)
\end{equation}
\]

## 3.1 The electrons-ions interaction <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

Previously we had established the electrons-ions interaction, now we will introduce the electrons density \(n(r)\). We start as always by taking the expectation values of the later coulomb interaction:

\[
\begin{gather*}
\bra{\Psi(r_1, \dots, r_N)}\hat{V}_{e-n}\ket{\Psi(r_1, \dots, r_N)}\\
    =\sum_i^{N} \underset{\mathbb{R}^{3N}}{\int} \Psi^*(r_1, \dots, r_N)v_{e-n}(r_i)\Psi(r_1, \dots, r_N)dr_1\dots dr_N\\
    = -\sum_i^{N}\sum_j^{N_n}\underset{\mathbb{R}^{3N}}{\int} \Psi^*(r_1, \dots, r_N)\frac{Z_j}{|r_i-R_j|}\Psi(r_1, \dots, r_N)dr_1\dots dr_N
\end{gather*}
\]

The operator \(\hat{V}_{e-n}\) allows for the appearance of the Norm squared of the wavefunction. Then we expand the summation over the electrons:

\[
\begin{align*}
    \langle\hat{V}_{e-n}\rangle_{\Psi} &= -\sum_j^{N_n} \Big[\underset{\mathbb{R}^{3}}{\int} \frac{Z_j}{|r_1-R_j|}|\Psi(r_1, \dots, r_N)|^2dr_1\dots dr_N+ \dots\\
    & + \underset{\mathbb{R}^{3}}{\int} \frac{Z_j}{|r_N-R_j|}|\Psi(r_1, \dots, r_N)|^2dr_1\dots dr_N\big]\\
    &=\sum_j^{N_n} \Big[\underset{\mathbb{R}^{3}}{\int} \frac{Z_j}{|r_1-R_j|}dr_1\underset{\mathbb{R}^{3(N-1)}}{\int} |\Psi(r, \dots, r_N)|^2dr_2\dots dr_N+ \dots\\
    &+\underset{\mathbb{R}^{3}}{\int} \frac{Z_jdr_1}{|r_N-R_j|} dr_N\underset{\mathbb{R}^{3(N-1)}}{\int} |\Psi(r_1, \dots, r_{N-1}, r)|^2dr_1\dots dr_{N-1}\Big]
\end{align*}
\]

The factor of each individual coulomb interaction integral is the same! Beside the same trick of shuffling the arguments and changing re-arranging the indices, we use the dummy variables \(r_i \longrightarrow r\) we rewrite:

\[
\begin{gather*}
\langle\hat{V}_{e-n}\rangle_{\Psi} = -N\sum_j^{N_n}\underset{\mathbb{R}^{3}}{\int} \frac{Z_j}{|r-R_j|}dr\underbrace{\underset{\mathbb{R}^{3(N-1)}}{\int} \Psi(r, \dots, r_{N})dr_2\dots dr_{N}}\_{n(r)/N}
\end{gather*}
\]

We notice the appearance of the electron density that we define it previously, hence:

\[
\begin{equation}
\langle\hat{V}_{e-n}\rangle_{\Psi} = \int V_{e-n}(r)n(r)dr
\end{equation}
\]

## 3.2 The electrons-electrons interaction <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

Using the same manner that we did in the last section we will introduce the electron density. Note that it is not quite the same quantity \(n(r)\)! Within the electrons-electrons interaction. And the starting point is always the avearage value:

\[
\begin{gather*}
    \bra{\Psi(r_1, \dots, r_N)}\hat{V}_{e-e}\ket{\Psi(r_1, \dots, r_N)}\\
    = \frac{1}{2}\sum_i^{N}\sum_{j\neq i}^{N}\underset{\mathbb{R}^{3N}}{\int} \Psi^*(r_1, \dots, r_N)v_{e-e}(r_i,r_j)\Psi(r_1, \dots, r_N)dr_1\dots dr_N\\
    = \frac{1}{2} \sum_i^{N} \sum_{j\neq i}^{N} \underset{\mathbb{R}^{3N}}{\int} \frac{|\Psi^*(r_1, \dots, r_N)|^2}{|r_i-r_j|}dr_1\dots dr_N
\end{gather*}
\]

We will expend over the \(i\) summation:

\[
\begin{gather*}
    2\langle\hat{V}_{e-e}\rangle_{\Psi}=\sum_{j\neq i}^{N_n}\Big[\underset{\mathbb{R}^{3}}{\int}dr_1 \underset{\mathbb{R}^{3(N-1)}}{\int}\frac{|\Psi^*(r_1, \dots, r_N)|^2}{|r_1-r_j|}dr_2\dots dr_N \\
    + \underset{\mathbb{R}^{3}}{\int}dr_2  \underset{\mathbb{R}^{3(N-1)}}{\int}\frac{|\Psi^{*}(r_1, \dots, r_N)|^2}{|r_2-r_j|}dr_1\dots dr_N + \dots \\
    + \underset{\mathbb{R}^{3}}{\int}dr_N  \underset{\mathbb{R}^{3(N-1)}}{\int}\frac{|\Psi^{*}(r_1, \dots, r_N)|^2}{|r_N-r_j|}dr_1\dots dr_{N-1}\Big]
\end{gather*}
\]

Lets expand the first term over the summation \(j\neq i\):
\[
\begin{gather*}
\sum_{j\neq i}^{N_n}\underset{\mathbb{R}^{3}}{\int}dr_1 \underset{\mathbb{R}^{3(N-1)}}{\int}\frac{|\Psi^*(r_1, \dots, r_N)|^2}{|r_1-r_j|}dr_2\dots dr_N=\underset{\mathbb{R}^{3}}{\int}dr_1 \underset{\mathbb{R}^{3(N-1)}}{\int}\frac{|\Psi^*(r_1, \dots, r_N)|^2}{|r_1-r_2|}dr_2\dots dr_N  \\ 
    + \underset{\mathbb{R}^{3}}{\int}dr_1 \underset{\mathbb{R}^{3(N-1)}}{\int}\frac{|\Psi^*(r_1, \dots, r_N)|^2}{|r_1-r_3|}dr_2\dots dr_N + \dots \\
    + \underset{\mathbb{R}^{3}}{\int}dr_1 \underset{\mathbb{R}^{3(N-1)}}{\int}\frac{|\Psi^*(r_1, \dots, r_N)|^2}{|r_1-r_N|}dr_2\dots dr_N\\
=  \underset{\mathbb{R}^{6}}{\int}\frac{dr_1dr_2}{|r_1-r_2|} \underset{\mathbb{R}^{3(N-2)}}{\int}|\Psi^*(r_1, \dots, r_N)|^2dr_3\dots dr_N  \\
    + \underset{\mathbb{R}^{6}}{\int}\frac{dr_1dr_3}{|r_1-r_3|} \underset{\mathbb{R}^{3(N-2)}}{\int}|\Psi^*(r_1, \dots, r_N)|^2dr_2\dots dr_N  + \dots\\
    + \underset{\mathbb{R}^{6}}{\int}\frac{dr_1dr_{N}}{|r_1-r_N|} \underset{\mathbb{R}^{3(N-2)}}{\int}|\Psi^*(r_1, \dots, r_N)|^2dr_2\dots dr_{N-1} 
\end{gather*}    
\]

We apply a dummy variable changing \(r_1\longrightarrow r\) and \(r_j\longrightarrow r'\):

\[
\begin{gather*}
    \sum_{j\neq i}^{N_n}\underset{\mathbb{R}^{3}}{\int}dr_1 \underset{\mathbb{R}^{3(N-1)}}{\int}\frac{|\Psi^*(r_1, \dots, r_N)|^2}{|r_1-r_j|}dr_2\dots dr_N  = \underset{\mathbb{R}^{6}}{\int}\frac{drdr'}{|r-r'|} \underset{\mathbb{R}^{3(N-2)}}{\int}|\Psi^*(r, r', \dots, r_N)|^2dr_3\dots dr_N + \dots\\
    + \underset{\mathbb{R}^{6}}{\int}\frac{drdr'}{|r-r'|} \underset{\mathbb{R}^{3(N-2)}}{\int}|\Psi^*(r, \dots, r')|^2dr_3\dots dr_N
\end{gather*}
\]

Basically the integral over the \(\mathbb{R}^{3(N-2)}\) space is the same, and we have \((N-1)\) term. And again the shuffling propriety of the wave function:

\[
\begin{gather*}
    \sum_{j\neq i}^{N_n}\underset{\mathbb{R}^{3}}{\int}dr_1 \underset{\mathbb{R}^{3(N-1)}}{\int}\frac{|\Psi^*(r_1, \dots, r_N)|^2}{|r_1-r_j|}dr_2\dots dr_N  = (N-1)\underset{\mathbb{R}^{6}}{\int}\frac{drdr'}{|r-r'|} \underset{\mathbb{R}^{3(N-2)}}{\int}|\Psi^*(r, r', \dots, r_N)|^2dr_3\dots dr_N
\end{gather*}
\]

We treat each \(N\) remaining term the same, and we get:

\[
\begin{gather*}
\langle\hat{V}_{e-e}\rangle_{\Psi} = \frac{N(N-1)}{2}\underset{\mathbb{R}^{6}}{\iint}\frac{drdr'}{|r-r'|} \underset{\mathbb{R}^{3(N-2)}}{\int}|\Psi^*(r, r', \dots, r_N)|^2dr_3\dots dr_N
\end{gather*}
\]

Now we define the new pair electron density as following:

\[
\begin{equation}
n^{(2)}(r,r') = N(N-1)\underset{\mathbb{R}^{3(N-2)}}{\int}|\Psi^*(r, r', \dots, r_N)|^2dr_3\dots dr_N
\end{equation}
\]

<aside>
ℹ️ Which describe the density of two pair of electrons, one of them is seen as the center of the mass of the left \(N-1\) electrons system.
</aside>

Finally the electrons-electrons interaction is reduced into:

\[
\begin{equation*}
\langle\hat{V}_{e-e}\rangle_{\Psi} =\iint drdr' v_{e-e}(r,r')n^{(2)}(r, r')
\end{equation*}
\]

Here we will re-write the new raised quantity as an expansion of the usual density:

\[
\begin{equation*}
n^{(2)}(r,r') = n(r)\times n(r') + n^{(2)}_{corr}(r,r')
\end{equation*}
\]

Which lead to:

\[
\begin{equation}
\langle\hat{V}_{e-e}\rangle_{\Psi} =\iint drdr' v_{e-e}(r,r')n(r)n(r') + E_c
\end{equation}
\]

The \(E_c\) is a correction term.

## 3.3 The Kinetic Energy <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

Yet, we did not write our Energy as a functional of the density \(n(r)\). We still have the Kinetic term which is hard to deal with since we have the operator \(\nabla^2\) that act on the wavefunction (\(\Psi\)). In order to tackle the kinetic energy, we make one of the key assumptions of density functional theory. \(\textbf{We assume that the
density can be written as the sum norm squares of a collection of single-particle orbitals}\):

\[
\begin{equation*}
n(r) = \sum_i^N |\varphi_i(r)|^2
\end{equation*}
\]

These orbitals are called \(\textbf{Kohn-Sham orbitals}\) and they are initially completely unspecified in much the same way as in the orbitals in the Slater determinant in the \(\textbf{Hartree-Fock}\) formalism. The above form cannot really be considered an
approximation. It simply says that instead of the full many-particle system we consider an auxiliary system of single-particle orbitals that have the same ground state density as the real system. Hence the Kinetic energy can be written in term to the KS orbitals to a correction term; as following:

\[
\begin{equation}
T = -\frac{1}{2}\sum_i^N\int \varphi_i(r)\nabla^2_r \varphi_i(r)dr + E_x
\end{equation}
\]

<aside>
💡 The idea behind the \textbf{KS-orbitals} is to let introduce the density indirectly especially when it comes to the variation principal. The global idea is that the Kinetic energy had been linked to the density through \(\textbf{KS-orbitals}\).
</aside>

## 3.4 Introducing the Exchange Correlation term <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

In the following we will refer to the paper of \(\textsc{Kohn $\&$ Sham}\)<sup><b>3</b></sup>. As it was reported in the later paper, the ground state energy has the following form:

\[
\begin{equation}
E[n(r)]= -\frac{1}{2}\sum_i^N\int \varphi_i(r)\nabla^2_r \varphi_i(r)dr + \iint \frac{drdr'}{|r-r'|}n(r)n(r') + \int V_{e-n}(r)n(r)dr + E\_{xc}[n(r)]
\end{equation}
\]

Where:

\[
\begin{equation}
E_{xc}[n(r)] = \int dr\varepsilon*{xc}[n(r)]n(r)
\end{equation}
\]

Where \(\varepsilon\_{xc}\) is the exchange and correrrelation energy rep electron of a uniform electron gas of density \(n(r)\)<sup><b>3</b></sup>.

The origin of this term is the difference between a system of N interacting and noninteracting particles. More specifically:

- \(\textbf{Exchange}\) energy is the Pauli repulsion, omitted in the Hartree term;
- \(\textbf{Correlation}\) energy is the repulsion between electrons.

<sup><b>3</b></sup> [Walter Kohn and Lu Jeu Sham. Self-consistent equations including exchange and correlation effects. Physical review, 140(4A):A1133, 1965](https://doi.org/10.1103/PhysRev.140.A1133)

# 3.5 THE HOHENBERG-KOHN THEOREM <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

**Theorem I:**

<aside>
📜 The external potential \(V_{ext}(r)\) is a unique functional of the density \(n(r)\).
</aside>

<center><img src="/images/blogs/DFT_BottomUP/HB-K_TH.png"></center>

**Proof**

Let assume that exist two different external potential \(V*{ext}^{(1)}(r)\) and \(V*{ext}^{(2)}(r)\) that gives rise to the same electrons density for non-degenerate ground state \(n(r)\). Hence, we have two wavefunction for two Hamiltonian:

\[
\begin{gather*}
\langle \hat{H}^{(1)}\rangle_{\psi^{(1)}} = \langle \hat{T}\rangle_{\psi^{(1)}} + \langle \hat{V}_{e-e}\rangle_{\psi^{(1)}} + \int n(r)V_{ext}(r)dr \\
\langle \hat{H}^{(1)}\rangle_{\psi^{(1)}}  < \langle \hat{T}\rangle_{\psi^{(2)}} + \langle \hat{V}_{e-e}\rangle_{\psi^{(2)}} + \int n(r)V_{ext}(r)dr\\
\langle \hat{T}^{(1)}\rangle_{\psi^{(1)}} + \langle \hat{V}_{e-e}\rangle_{\psi^{(1)}} < \langle \hat{T}^{(2)}\rangle_{\psi^{(2)}} + \langle \hat{V}_{e-e}\rangle\_{\psi^{(2)}}
\end{gather*}
\]

In the other hand:

\[
\begin{gather*}
\langle \hat{H}^{(2)}\rangle_{\psi^{(2)}} = \langle \hat{T}\rangle_{\psi^{(2)}} + \langle \hat{V}_{e-e}\rangle_{\psi^{(2)}} + \int n(r)V_{ext}(r)dr \\
\langle \hat{H}^{(2)}\rangle_{\psi^{(2)}}  < \langle \hat{T}\rangle*{\psi^{(1)}} + \langle \hat{V}_{e-e}\rangle_{\psi^{(1)}} + \int n(r)V_{ext}(r)dr\\
\langle \hat{T}^{(2)}\rangle_{\psi^{(2)}} + \langle \hat{V}_{e-e}\rangle_{\psi^{(2)}} < \langle \hat{T}^{(1)}\rangle_{\psi^{(1)}} + \langle \hat{V}_{e-e}\rangle_{\psi^{(1)}}
\end{gather*}
\]

Which is a \(\textbf{Contradiction}!!!\)

**Theorem II:**

<aside>
📜 A universal functional for the energy $E[n(r)]$ can be defined in terms of the density. The exact ground state is the global minimum value of this functional.
</aside>

**Proof:**

Let \(E\) be the exact energy of the ground state of our system of \(N\) interacting electron (non-degenerate state), then:

\[
\begin{gather*}
E= \underset{\psi}{\text{min}} \langle \hat{T} + \hat{V}*{e-e} + \hat{V}*{ext}\rangle*{\psi}\\
E= \underset{\psi}{\text{min}} \Big[ \langle \hat{T} + \hat{V}*{e-e}\rangle*{\psi}+ \langle\hat{V}*{ext}\rangle*{\psi}\Big]\\
E= \underset{n(r)}{\text{min}} \Big[ \iint drdr' v*{e-e}(r,r')n(r)n(r') + \int n(r)V\_{ext}(r)dr+ G[n(r)]\Big]
\end{gather*}
\]

Where \(G[n(r)]\) is a universal function of the density:

\[
\begin{equation}
G[n(r)] = \underset{n(r)}{\text{min}} \Big[ T[n(r)] + E\_{xc}[n(r)] \Big]
\end{equation}
\]

# 4 Kohn and Sham Equation: Derivation attempt! <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

We will try to re-derive the \(\textbf{KS}\) equation by following the same procedures used in \(\textbf{HF}\) approach. The idea is as simple as the minimization over the wavefunction! But an approximation is needed. As we discussed previously we already write the Energy as functional of the density (i.e: \(E[n(r)]\)); but it was shown that the kinetic energy raise a problem, that it can not be written in terms of the density \(n(r)\), so we consider the \(\textbf{KS}\) orbitals that builds the density from ground i.e: \(n(r)=\sum_i^N |\varphi(r)|^2\), hence the kinetic term can be minimized through the set of these orbitals! that we postulate theirs orthogonality constraints:

\[
\begin{gather*}
\frac{\delta E[n]}{\delta \varphi^*_k(r)} =\frac{\delta}{\delta \varphi^*_k(r)} \Big[ \int n(r)v_{e-N}(r)dr + \iint n(r)v_{e-e}(r,r')n(r')drdr' + G[n] \Big] = 0\\
\frac{\delta}{\delta \varphi^*_k(r)} \Big[ \int n(r)v_{e-N}(r)dr + \iint n(r)v_{e-e}(r,r')n(r')drdr' + G[n]\\
-\sum_i^N\varepsilon_i\Big( \int\varphi^*_i(r)\varphi_i(r)dr-1\Big)\Big] = 0
\end{gather*}
\]

Where \(\varepsilon\) stand for the \(\textbf{Lagrange multiplier}\). The two first terms on the left hand side are easy to manipulate!

\[
\begin{gather*}
\underbrace{\int v_{e-N}(r)\varphi_k(r)dr + \iint v_{e-e}(r,r')n(r')\varphi_k(r)drdr'}*{\int\Theta(r)\varphi_k(r)dr} + \frac{\delta G[n]}{\delta \varphi^*_k(r)} =\\ \frac{\delta }{\delta \varphi^*_k(r)} \sum_i^N\varepsilon_i\Big( \int\varphi^*_i(r)\varphi_i(r)dr-1\Big)
\end{gather*}
\]

We will try to tackle the universal function \(G[n]\):

\[
\begin{gather*}
\frac{\delta}{\delta \varphi^*_k(r)} G[n] =  \frac{\delta}{\delta \varphi^*_k(r)} \Big[T[n(r)] + E_{xc}[n(r)]\Big] = \frac{\delta}{\delta \varphi^*_k(r)}\Big[-\frac{1}{2}\sum_i^N\int\varphi^*_i(r)\nabla^2_{r_i}\varphi_i(r)dr\Big] + \frac{\delta E_{xc}[n(r)]}{\delta \varphi^*_k(r)}\\
    -\frac{1}{2}\int \nabla^2_{r_k}\varphi_k(r)dr + \int  \frac{\delta E_{xc}[n(r)]}{\delta n(r')} \frac{\delta n(r')}{\delta \varphi^*_k(r)}\delta(r-r')dr'=-\frac{1}{2}\int \nabla^2_r\varphi_k(r)dr + \int \frac{\delta E_{xc}[n(r)]}{\delta n(r)} \varphi_k(r)dr = \varepsilon_k\int \varphi_k(r)dr
\end{gather*}
\]

For the \(\textbf{Lagrange multiplier}\) we get:

\[
\begin{gather*}
\frac{\delta }{\delta \varphi^*_k(r)} \sum_i^N\varepsilon_i\Big( \int\varphi^*_i(r)\varphi_i(r)dr-1\Big) = \varepsilon_k\int \varphi_k(r)dr
\end{gather*}
\]

The final expression called \(\textbf{KS-equation}\) has the foollowing form:

\[
\begin{gather}
\int \Theta(r)\varphi_k(r)dr-\frac{1}{2}\int\nabla^2_{r_k}\varphi(r)dr + \frac{\delta E_{xc}[n(r)]}{\delta n(r)} \varphi_k(r)dr
\end{gather}
\]

Which is reduced into:

\[
\begin{gather}
\Big[-\frac{1}{2}\nabla^2_{r_k} + \Theta(r) + V_{xc}(r)\Big] \varphi_k(r) = \varepsilon_k\varphi_k(r)
\end{gather}
\]

The problem is now can be solved exactly if we know the function \(V_{xc}=\frac{\delta E_{xc}[n(r)]}{\delta n(r)}\)!

<aside>
✍️ The key for deriving the \textbf{KS-equation} is knowing the following :

\[
\begin{gather*}
\frac{\delta h[f(x)]}{\delta f(x)} = \int \frac{h[f(x)]}{g(x')}\frac{g(x')}{f(x)} dx
\end{gather*}
\]

Also, the ratio \(\frac{g(x')}{f(x)}\) in our case is evaluated to be \(f(x)\delta(x-x')\), where \(f(x)\) is the \textbf{KS-wavefunction} "\(\varphi(r)\)".

</aside>

# 5 Solving KS equation <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

In this section we will see how we can solve \(\textbf{KS-equation}\), but first we will write down the matrix formula equivalent to the Schrodinger-like equation; using the **Planewave expansion**. Without further ado, we start by defining our wavefunction (i.e: the \(\textbf{KS-orbitals}\)) as following:

\[
\begin{gather*}
\varphi_i(\overrightarrow{r})= \frac{1}{\sqrt{\Omega} }\sum_{\overrightarrow{q}} c_{i,q} e^{j\overrightarrow{q}\cdot\overrightarrow{r}}
\end{gather*}
\]

Where, \(\Omega\) is the volume of the real space where we are working in, and \(c\_{i,q}\) are the Fourier coefficients of the wavefunction. Note, that we are moving to the reciprocal space \({\overrightarrow{q}}\) instead of the real one, which will make \(\textbf{Fourier transform}\) the pillars of this work! For our Hamiltonian that is described by \(\textbf{KS}\) equation will be rewritten as follwing:

\[
\begin{gather*}
\hat{H}_{KS} = \hat{T}_{s} + \hat{V}_{eff}
\end{gather*}
\]

Where, \(\hat{T}_{s}\) is the single-particle kinetic energy and \(\hat{V}_{eff}\). Where \(\hat{V}_{eff} = \hat{\Theta} + \hat{V}_{xc}\). Is the effective potential which contains the external, \(\textbf{Hartree}\) (i.e: \(\hat{\Theta}\)) and \(\textbf{exchange-correlation}\) (i.e: \(\hat{V}\_{xc}\)) parts. So far we can write the wavefunction in the basis set of \(\{\overrightarrow{q}\}\) as following:

\[
\begin{gather*}
\varphi_i(\overrightarrow{r})= \frac{1}{\sqrt{\Omega} }\sum_{\overrightarrow{q}} c_{i,q} \ket{\overrightarrow{q}}
\end{gather*}
\]

Now to get the eigenvalues \(\varepsilon_i\) we take the evaluate the following product:

\[
\begin{gather*}
\bra{\overrightarrow{q'}}\hat{H}_{KS}\varphi_i(r) = \bra{\overrightarrow{q'}}\Big[\hat{T}_{S} + \hat{V}_{eff}\Big]\varphi_i(r)\\
\frac{1}{\sqrt{\Omega} }\sum_{\overrightarrow{q}} c_{i,q}\bra{\overrightarrow{q'}}\hat{H}_{KS} \ket{\overrightarrow{q}} = \frac{1}{\sqrt{\Omega} }\sum_{\overrightarrow{q}} c_{i,q}\varepsilon_i\underbrace{\bra{\overrightarrow{q'}}\ket{\overrightarrow{q}} }_{\delta_{q';q}}
\end{gather*}
\]

Which yield to :

\[
\begin{gather*}
\underline{\underline{H}}\cdot \underline{\underline{C}}=\varepsilon_i\cdot\underline{\underline{C}}
\end{gather*}
\]

where \(\underline{\underline{H}}\) is the Hamiltonian in matrix representation and \(\underline{\underline{C}}\) is a vector of coefficients. Now, we will work out the kinetic energy term:

\[
\begin{gather*}
\bra{\overrightarrow{q'}}\hat{T}_{s}\ket{\overrightarrow{q}} = -\frac{1}{2}\bra{\overrightarrow{q'}}\Big(\frac{d^2}{dr^2}\underbrace{\ket{\overrightarrow{q}}}_{\equiv e^{j\overrightarrow{q}\cdot\overrightarrow{r}}}\Big) =\frac{1}{2}||\overrightarrow{q}||^2\delta_{q';q}  
\end{gather*}
\]

In the planewave representation, the kinetic energy term assumes an extremely simple, diagonal form. Now we proceed with effective potential, since \(V_{eff}\) has the periodicity of the lattice and therefore the only allowed Fourier components are those with
the wavevectors in the reciprocal space of the crystal:

\[
\begin{gather*}
V_{eff}(\overrightarrow{r})= \sum_n \bar{V}_{eff}(\overrightarrow{G}_n)e^{j\overrightarrow{G}_n\cdot\overrightarrow{r}}\\
\text{Where:\ } \bar{V}_{eff}(\overrightarrow{G}_n) = \frac{1}{\Omega_{cell}}\int_{\Omega_{cell}}V_{eff}(\overrightarrow{r})e^{j\overrightarrow{G}_n \cdot\overrightarrow{r}}d\overrightarrow{r}
\end{gather*}
\]

Performing the same product as previously gives:

\[
\begin{gather*}
\bra{\overrightarrow{q'}}\hat{V}_{eff}\ket{\overrightarrow{q}}=\sum_n \bar{V}_{eff}(\overrightarrow{G}_n) \bra{\overrightarrow{q'}}\ket{\overrightarrow{G}_n+\overrightarrow{q}}= \sum_n \bar{V}_{eff}(\overrightarrow{G}_n) \delta_{||\overrightarrow{q'}-\overrightarrow{q}||;\overrightarrow{G}_n }
\end{gather*}
\]

By make use of the change in variable, by make \(\overrightarrow{q} = \overrightarrow{k}+\overrightarrow{G}_m\) and \(\overrightarrow{q'} = \overrightarrow{k}+\overrightarrow{G}_m'\), so the wave vectors (\(q\ \&\ q'\)) differ by a reciprocal lattice vector. which brings the Schrodinger-like equation to the \(k\) space:

\[
\begin{gather*}
\sum_m H_{m',m}(\overrightarrow{k})c_{i,m}(\overrightarrow{k})=\varepsilon_ic_{i,m'}(\overrightarrow{k})
\end{gather*}
\]

In summary, we reduced the problem into the First \(\textbf{Brillouin zone}\) (The primitive cell in the reciprocal space), thanks to \(\textbf{Bloch's theorem}\). Now it is important to see how the \(V_{eff}\) can be written in the \textbf{Fourier Space}. For the sake of notation we denote \(n(\overrightarrow{r})\) the real electron density and \(\rho(\overrightarrow{G})\) it conjugate in the reciprocal space.

## 5.1 The electron-electron interaction (Hartee Energy term) <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

We use the same definition of the planewave expension for the electron density:

\[
\begin{align*}
\iint v_{e-e}(\overrightarrow{r'}, \overrightarrow{r})n(\overrightarrow{r})n(\overrightarrow{r'})d\overrightarrow{r}d\overrightarrow{r'} = \frac{1}{2}\sum_{\overrightarrow{G'}, \overrightarrow{G}}\iint d\overrightarrow{r}d\overrightarrow{r'} \frac{\rho(\overrightarrow{G'})\rho(\overrightarrow{G})}{||\overrightarrow{r'}-\overrightarrow{r}||}e^{j\overrightarrow{G}\cdot\overrightarrow{r}}e^{j\overrightarrow{G'}\cdot\overrightarrow{r'}}
\end{align*}
\]

We write : \(\overrightarrow{u} = \overrightarrow{r}-\overrightarrow{r'} \longleftrightarrow d\overrightarrow{u} = \overrightarrow{r}\), and in the first exponential we add and subtract \(\overrightarrow{r'}\):

\[
\begin{align*}
\frac{1}{2}\sum\_{\overrightarrow{G'}, \overrightarrow{G}}\iint d\overrightarrow{u}d\overrightarrow{r'} \frac{\rho(\overrightarrow{G'})\rho(\overrightarrow{G})}{||\overrightarrow{u}||}e^{j\overrightarrow{G}\cdot\overrightarrow{u}}e^{j\overrightarrow{r'}\cdot\Big(\overrightarrow{G'}+\overrightarrow{G}\Big)}
\end{align*}
\]

We separate the independent integral and write \(\underset{\mathbb{R}^3}{\int d\overrightarrow{u}} =2\pi\int_{0}^{\infty}\int_{0}^{\pi} u^2 du sin(\theta) d\theta\):

\[
\begin{align*}
\pi\sum_{\overrightarrow{G'}, \overrightarrow{G}} \rho(\overrightarrow{G'})\rho(\overrightarrow{G}) \underbrace{\int e^{j\overrightarrow{r'}\cdot\Big(\overrightarrow{G'}+\overrightarrow{G}\Big)}  d\overrightarrow{r'} }_{\Omega_{cell}\times \delta(\overrightarrow{G'}-\overrightarrow{G})  }\int_{0}^{\infty}  \Big[\int_{0}^{\pi}   \underbrace{e^{j G\cdot u cos(\theta)} u sin(\theta) d\theta}_{\equiv - \frac{e^{jx}}{G}dx \ |\  x = G\cdot u cos(\theta)\ |\ 1 \langle x \langle -1}\Big]d u\\
     \iint v_{e-e}(\overrightarrow{r'}, \overrightarrow{r})n(\overrightarrow{r})n(\overrightarrow{r'})d\overrightarrow{r}d\overrightarrow{r'} = \pi\Omega_{cell}\sum_{\overrightarrow{G'}, \overrightarrow{G}} \rho(\overrightarrow{G'})\rho(\overrightarrow{G})\times \delta(\overrightarrow{G'}-\overrightarrow{G})  \int_{0}^{\infty} \underbrace{\frac{e^{jG\cdot u}}{jG}|_{-1}^{1}}_{2\times \frac{sin(Gu)}{G}} du 
\end{align*}
\]

The last integral factor it is not a proper integral!

\[
\begin{equation*}
\int_0^\infty \frac{sin(x)}{G^2}dx = \underset{a\longrightarrow \infty}{\lim} \frac{cos(X)}{G^2}\Big|_{a}^0 =\left\{\begin{array}{c}
0 \\
2/G^2 \\
\end{array}\right.
\end{equation*}
\]

Rigorously the limit does not exist (not unique a.k.a \(\lim\_{x\longrightarrow a} f(x) \neq f(a) \))!

\[
\begin{align*}
\iint v_{e-e}(\overrightarrow{r'}, \overrightarrow{r})n(\overrightarrow{r})n(\overrightarrow{r'})d\overrightarrow{r}d\overrightarrow{r'} =4\pi\Omega_{cell}\sum\_{\overrightarrow{G'}, \overrightarrow{G}} \frac{\rho(\overrightarrow{G'})\rho(\overrightarrow{G})}{||\overrightarrow{G}||^2}\times \delta(\overrightarrow{G'}-\overrightarrow{G})
\end{align*}
\]

A further simplification: \(G = -\nu G'\), because the density is a physical measurable quantity, \(\mathcal{F}\{\Phi\}(\omega)=\mathcal{F}\{\Phi\}(-\omega)\), where \(\mathcal{F}\) is Fourier transform and \(\Phi\) physical entity i.e the negative and the positive frequency components are equal [see *chapter 8 of Aschroft and Mermin’s "Solid State Physics"*].

And by considering the propriety : \(\rho(\overrightarrow{G}) = \rho(\overrightarrow{G'})\)

\[
\begin{gather}
\iint v_{e-e}(\overrightarrow{r'}, \overrightarrow{r})n(\overrightarrow{r})n(\overrightarrow{r'})d\overrightarrow{r}d\overrightarrow{r'} =4\pi\Omega_{cell} \sum_{\overrightarrow{G} }\frac{\rho^2(\overrightarrow{G})}{||\overrightarrow{G}||^2}
\end{gather}
\]

## 5.2 The electron-electron interaction (Hartee Potential term) <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

With the same analogy:

\[
\begin{align*}
\int v_{e-n}(\overrightarrow{r})n(\overrightarrow{r})d\overrightarrow{r} &= -\frac{1}{2}\sum_{\overrightarrow{G}} \int d\overrightarrow{r} \frac{\rho(\overrightarrow{G})}{||\overrightarrow{r}-\overrightarrow{R}||} e^{j\overrightarrow{G}\cdot(\overrightarrow{r}-\overrightarrow{R})}e^{j\overrightarrow{G}\cdot\overrightarrow{R}}\\
& = -\frac{1}{2}\sum_{\overrightarrow{G}} \underset{\mathbb{R}^3}{\int} du e^{j\overrightarrow{G}\cdot\overrightarrow{R}} \frac{\rho(\overrightarrow{G})}{G||\overrightarrow{u}||}e^{j G\cdot u cos(\theta)}d(-G u cos(\theta))\\
&= -\pi\sum_{\overrightarrow{G}}e^{j\overrightarrow{G}\cdot\overrightarrow{R}} \rho(\overrightarrow{G}) \underbrace{\int_0^\infty \Big[\frac{e^{j G\cdot u cos(\theta)}}{jG}\Big|_\pi^0\Big]du}_{\text{We accept blindly "4/$G^2$" as a result!}}
\end{align*}
\]

And we ends up by having:

\[
\begin{gather*}
\int v_{e-n}(\overrightarrow{r})n(\overrightarrow{r})d\overrightarrow{r} = - 4\pi\sum_{\overrightarrow{G}}\frac{\rho(\overrightarrow{G})}{||\overrightarrow{u}||^2} e^{j\overrightarrow{G}\cdot\overrightarrow{R}}
\end{gather*}
\]

## 5.3 The exchange-correlation term <a href="#toppage" style="float:right;text-align:right;font-weight:normal;font-size:1.5rem">Go to TOC</a>

As we have seen before that the last contribution of the effective potential in \(\textbf{KS}\) Hamiltonian is due to the change of _exchange-correlation_ energy function over a small variation in the electron density (i.e: \(V\_{xc}(\overrightarrow{r}) = \frac{\delta E[n(\overrightarrow{r})]}{\delta n(\overrightarrow{r})}\)). We will use the expression given by <sup><b>3</b></sup> for the later term, and since we can exchange the derivation of a function over the integral like the case with regular functions, note that we could derive firts and perform the Fourier decomposition, and we ends up by having two terms:

\[
\begin{align*}
    V*{xc}(\overrightarrow{r}) &= \frac{\delta }{\delta n(\overrightarrow{r})} \Big[ \int d\overrightarrow{r} \rho(\overrightarrow{r})\bar{\varepsilon}_{xc}[n(\overrightarrow{r})] \Big]\\
    &= \frac{\delta }{\delta n(\overrightarrow{r})} \Big[\sum_{\overrightarrow{G},\overrightarrow{G'}} \int d\overrightarrow{r} \rho(\overrightarrow{G})e^{j\overrightarrow{G}\cdot\overrightarrow{r}}\bar{\varepsilon}_{xc}(\overrightarrow{G'})e^{j\overrightarrow{G'}\cdot\overrightarrow{r}} \Big]\\
    &= \frac{\delta }{\delta n(\overrightarrow{r})} \Big[\sum_{\overrightarrow{G},\overrightarrow{G'}} \rho(\overrightarrow{G})\bar{\varepsilon}*{xc}(\overrightarrow{G'}) \int e^{j(\overrightarrow{G}+\overrightarrow{G'})\cdot\overrightarrow{r}}d\overrightarrow{r}\Big]\\
    &= \Omega_{cell}\frac{\delta }{\delta n(\overrightarrow{r})} \Big[\sum_{\overrightarrow{G},\overrightarrow{G'}} \rho(\overrightarrow{G})\bar{\varepsilon}*{xc}(\overrightarrow{G'}) \times \delta(\overrightarrow{G}-\overrightarrow{G'})\Big] = \Omega_{cell}\frac{\delta }{\delta n(\overrightarrow{r})} \Big[\sum_{\overrightarrow{G}} \rho(\overrightarrow{G})\bar{\varepsilon}_{xc}(\overrightarrow{G}) \Big]
\end{align*}
\]

<sup><b>3</b></sup> [Walter Kohn and Lu Jeu Sham. Self-consistent equations including exchange and correlation effects. Physical review, 140(4A):A1133, 1965](https://doi.org/10.1103/PhysRev.140.A1133)


At this stage we shall say that we manage to perform **Bottom-up synthesis of Density Functional Theory(DFT)**.

Thank you for reaching this points.