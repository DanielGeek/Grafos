package grafos;

import java.util.ArrayList;
import java.util.Iterator;

public class GrafoLista {
	ArrayList<Integer> listaAdy[];

	public GrafoLista(int nVertices) {
		listaAdy = new ArrayList[nVertices];

		for (int i = 0; i < nVertices; i++)
			listaAdy[i] = new ArrayList<Integer>();

	}

	public void agregarArista(int vOrigen, int vDestino) {
		listaAdy[vOrigen].add(vDestino);

	}

	public void eliminarArista(int vOrigen, int vDestino) {
		//Borramos del vertice origen
		listaAdy[vOrigen].remove(buscarEnLista(vOrigen,vDestino));
		//Borramos del vertice destino
		listaAdy[vDestino].remove(buscarEnLista(vDestino,vOrigen));

	}

	public void adyacentes(int vOrigen) {
		System.out.print(listaAdy[vOrigen]);

	}

	public boolean existeArista(int vOrigen, int vDestino) {
		if (listaAdy[vOrigen].contains(vDestino))
			return true;

		return false;

	}

	public int grado(int vOrigen) {
		return listaAdy[vOrigen].size();
		
	}

	public void vectorGrados() {
		for (int i = 0; i < listaAdy.length; i++)
			System.out.println("El grado del vértice [" + i + "] es: " + listaAdy[i].size());

	}

	public boolean existeCaminata() {
		for (int i = 0; i < listaAdy.length - 1; i++) {
			if (!existeArista(i, i + 1))
				return false;

		}
		return true;

	}

	private int buscarEnLista(int vertice,int buscar){
		Iterator it = listaAdy[vertice].iterator();
		int pos = 0;
		int valor;
		while(it.hasNext()){
			valor = (int) it.next();
			if(valor == buscar)
				return pos;

				pos++;
		}
		return -1;
	}
	
}
